import { ChangeEvent, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
	Container,
	Grid,
	Stack,
	Box,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { CustomButton } from "src/components";
import { FormData1 } from "./FormData1";
import { FormData2 } from "./FormData2";
import { FormDataCheckout } from "./FormDataCheckout";
import { CustomLoading } from "src/components/CustomLoading";
import { StoreService } from "src/services/StoreService";
import { SocialNetwork } from "src/interfaces/Store";
import { StorageService } from "src/services/StorageService";
import { PlanService } from "src/services/PlanService";
import { CommuneData } from "src/interfaces/Plan";
import { CommunesSelectorTable } from "src/components/CommunesSelectorTable";
import { ImageService } from "src/services/ImageService";

const steps = ["Datos básicos", "Datos de contacto", "Listado de comunas"];

export const BusinessRegisterPage = () => {
	const inputFile = useRef<HTMLInputElement | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const [currentStep, setCurrentStep] = useState(0);

	const [storeName, setStoreName] = useState("");
	const [address, setAddress] = useState("");
	const [description, setDescription] = useState("");
	const [socialNetworks, setSocialNetworks] = useState(Array<SocialNetwork>);
	const [image, setImage] = useState<File>();

	const [communes, setCommunes] = useState<CommuneData[]>([]);
	const [selectedCommunes, setSelectedCommunes] = useState<string[]>([]);
	const [selectedPeriod, setSelectedPeriod] = useState<string>("monthly");

	const [monthlyValue, setMonthlyValue] = useState<number>(0);
	const [annualValue, setAnnualValue] = useState<number>(0);

	const getPlans = async () => {
		const result = await PlanService.getPlans();
		if (!result.status) return;

		setCommunes(result.data!);
	};

	useEffect(() => {
		getPlans();
	}, []);

	// const handlePrev = () => {
	// 	if (currentStep === 0) return;
	// 	setCurrentStep(currentStep - 1);
	// };

	const handleSocialNetworks = (socialNetwork: SocialNetwork) => {
		setSocialNetworks((oldSocialNetworks) => [
			...oldSocialNetworks,
			socialNetwork,
		]);
	};

	const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files && files.length) {
			setImage(files[0]);
		}
	};

	const handleNext = async () => {
		if (currentStep === 3) {
			setIsLoading(true);

			setTimeout(() => {
				navigate("/admin/welcome");
				setCurrentStep(0);
			}, 1500);

			return;
		}
		if (currentStep === 0) {
			let uploadImage;
			if (image) {
				const filename = image!.name;
				const parts = filename.split(".");
				const fileType = parts[parts.length - 1];
				console.log("fileType", fileType);

				const imageFormData = new FormData();
				imageFormData.append("images", image!);
				uploadImage = await ImageService.uploadImage(imageFormData);
				if (uploadImage.error) {
					console.error("No se pudo subir la imagen", uploadImage.data);
				}
			}

			const store = await StoreService.createStore({
				name: storeName,
				address,
				description,
				logo: uploadImage && !uploadImage.error ? uploadImage.data.images[0] : "",
			});
			if (store.error) {
				console.error("No se pudo crear tu negocio", store.data);
				return;
			}

			const user = StorageService.get("user");
			user.store = store.data;
			StorageService.set("user", JSON.stringify(user));
		} else if (currentStep === 1) {
			const storeUpdated = await StoreService.updateStore({
				socialNetworks,
			});
			if (storeUpdated.error) {
				console.error(
					"No se pudo actualizar los datos de tu negocio",
					storeUpdated.data
				);
				return;
			}

			const user = StorageService.get("user");
			user.store = storeUpdated.data;
			StorageService.set("user", JSON.stringify(user));
		}
		setCurrentStep(currentStep + 1);
	};

	return (
		<>
			<CustomLoading isOpen={isLoading} />
			<Container sx={{ minHeight: "calc( 100vh - 65px )" }}>
				<Grid
					container
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
					}}
				>
					<Grid item xs={12} sm={10}>
						<Box
							p={5}
							sx={{
								borderRadius: "20px",
								boxShadow: "0 4px 10px 5px rgba(0, 0, 0, .1)",
								my: 5,
							}}
						>
							<Typography
								variant="h5"
								component={"h2"}
								textAlign={"center"}
								fontWeight={"500"}
							>
								Completemos los siguientes datos de tu negocio
							</Typography>

							<Box my={5} sx={{ borderWidth: 1, borderColor: "red" }} px={8}>
								<Stepper activeStep={currentStep}>
									{steps.map((label, idx) => (
										<Step key={idx}>
											<StepLabel>{label}</StepLabel>
										</Step>
									))}
								</Stepper>
							</Box>

							{currentStep === 0 && (
								<>
									<FormData1
										setStoreName={setStoreName}
										setAddress={setAddress}
										setDescription={setDescription}
										inputFileRef={inputFile}
										handleImage={handleImage}
										image={image}
									/>
									<Stack direction={"row"} justifyContent={"flex-end"} mt={3}>
										<Box>
											<CustomButton
												size="large"
												variant="contained"
												endIcon={<ChevronRightIcon />}
												sx={{ borderRadius: 2, textTransform: "none" }}
												onClick={() => handleNext()}
											>
												Continuar
											</CustomButton>
										</Box>
									</Stack>
								</>
							)}
							{currentStep === 1 && (
								<>
									<FormData2 handleSocialNetworks={handleSocialNetworks} />
									<Stack direction={"row"} justifyContent={"flex-end"} mt={3}>
										<Box>
											<CustomButton
												size="large"
												variant="contained"
												endIcon={<ChevronRightIcon />}
												sx={{ borderRadius: 2, textTransform: "none" }}
												onClick={() => handleNext()}
											>
												Continuar
											</CustomButton>
										</Box>
									</Stack>
								</>
							)}
							{currentStep === 2 && (
								<>
									<CommunesSelectorTable
										communes={communes}
										selectedCommunes={selectedCommunes}
										setSelectedCommunes={setSelectedCommunes}
										selectedPeriod={selectedPeriod}
										setSelectedPeriod={setSelectedPeriod}
										monthlyValue={monthlyValue}
										setMonthlyValue={setMonthlyValue}
										annualValue={annualValue}
										setAnnualValue={setAnnualValue}
									/>

									<Stack direction={"row"} justifyContent={"flex-end"} mt={3}>
										<Box>
											<CustomButton
												disabled={selectedCommunes.length === 0}
												size="large"
												variant="contained"
												endIcon={<ChevronRightIcon />}
												sx={{ borderRadius: 2, textTransform: "none" }}
												onClick={() => handleNext()}
											>
												Continuar
											</CustomButton>
										</Box>
									</Stack>
								</>
							)}
							{currentStep === 3 && (
								<>
									<FormDataCheckout
										selectedCommunes={selectedCommunes}
										selectedPeriod={selectedPeriod}
										monthlyValue={monthlyValue}
										annualValue={annualValue}
									/>
								</>
							)}

							{/* {
									currentStep !== 2 && (
									<Stack direction={"row"} justifyContent={"space-between"} mt={3}>
										<Box>
										{currentStep > 0 && currentStep < 3 && (
											<CustomButton
											variant="text"
											size="large"
											startIcon={<ChevronLeftIcon />}
											sx={{ textTransform: "none" }}
											onClick={() => handlePrev()}
											>
											Volver
											</CustomButton>
										)}
										</Box>
										<Box>
										<CustomButton
											variant="contained"
											size="large"
											endIcon={<ChevronRightIcon />}
											sx={{ borderRadius: 2, textTransform: "none" }}
											onClick={() => handleNext()}
										>
											Continuar
										</CustomButton>
										</Box>
									</Stack>
									)
								} */}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
