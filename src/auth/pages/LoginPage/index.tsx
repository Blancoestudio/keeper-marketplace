import { Link, useNavigate } from "react-router-dom";

import { Box, Grid, Stack, Typography } from "@mui/material";

import { CustomTextField, CustomButton } from "src/components";
import { AuthService } from "src/services/AuthService";
import { ChangeEvent, FormEvent, useState } from "react";

export const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();
		if (email.length <= 0 || password.length <= 0) {
			console.error("Todos los campos son obligatorios");
			return;
		}

		const login = await AuthService.login(email, password);
		if (login.error) {
			console.error("No se pudo ingresar", login.data);
			return;
		}

		localStorage.setItem("user", JSON.stringify(login.data));
		navigate("/admin/dashboard");
	};

	return (
		<Grid item xs={12} sm={10} lg={4}>
			<Box
				p={5}
				sx={{
					borderRadius: "20px",
					margin: "2em 0",
					boxShadow: "0 4px 10px 5px rgba(0, 0, 0, .1)",
				}}
			>
				<Grid container gap={1}>
					<Typography variant="h5" fontWeight={"500"}>
						Iniciar sesión
					</Typography>

					<form
						style={{ marginTop: "1em", width: "100%" }}
						onSubmit={handleLogin}
					>
						<CustomTextField
							id="email"
							label="Email"
							type="email"
							autoComplete="email"
							placeholder="Ingresa tu correo electrónico"
							onChange={handleEmail}
						/>

						<CustomTextField
							id="password"
							label="Contraseña"
							type="password"
							autoComplete="current-password"
							placeholder="Ingresa tu contraseña"
							onChange={handlePassword}
						/>

						<CustomButton
							type="submit"
							variant="contained"
							fullWidth
							size="large"
							sx={{ borderRadius: 2, mt: 2, textTransform: "none" }}
						>
							Iniciar sesión
						</CustomButton>

						<Stack direction={"row"} mt={2} mb={3}>
							<Link
								to={"/auth/password-recovery"}
								style={{ textDecoration: "none" }}
							>
								¿Olvidaste tu contraseña?
							</Link>
						</Stack>

						<Box
							sx={{
								position: "relative",
								textAlign: "center",
								mt: 2,
							}}
						>
							<hr
								style={{
									position: "absolute",
									width: "100%",
									zIndex: -1,
									top: 0,
									bottom: 0,
									height: 1,
									margin: "auto",
									backgroundColor: "#EAEAEA",
									border: "none",
								}}
							/>
							<Typography
								fontSize={14}
								color={"#ABB4C5"}
								px={2}
								sx={{
									display: "inline-flex",
									backgroundColor: "#ffffff",
								}}
							>
								¿ No tienes cuenta ?
							</Typography>
						</Box>

						<CustomButton
							type="submit"
							variant="outlined"
							fullWidth
							size="large"
							color="primary"
							sx={{ borderRadius: 2, mt: 2, textTransform: "none" }}
							onClick={() => navigate("/auth/register")}
						>
							Registrarse
						</CustomButton>
					</form>
				</Grid>
			</Box>
		</Grid>
	);
};
