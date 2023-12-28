import { useEffect, useState } from "react";
import {
	Link as LinkRouter,
	useLocation,
	NavLink,
	useNavigate,
} from "react-router-dom";

import {
	AppBar,
	Avatar,
	Box,
	Button,
	Divider,
	Hidden,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import Logo from "src/assets/svg/logo_keeper.svg";
import MenuIcon from "@mui/icons-material/Menu";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomButton } from "./CustomButton";

import bgNavbar from "/src/assets/images/bg-navbar.png";

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<CustomButton
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Dashboard
			</CustomButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
}

export const Navbar = () => {
	const navigate = useNavigate();

	const [showMenu, setShowMenu] = useState(true);
	const [isAuth, setIsAuth] = useState(false);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const location = useLocation();

	useEffect(() => {
		if (location.pathname.includes("auth")) {
			setShowMenu(false);
		} else {
			setShowMenu(true);
		}
	}, [location]);

	useEffect(() => {
		if (
			location.pathname.includes("admin") &&
			!location.pathname.includes("business-register")
		) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, [location]);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		navigate("/auth/login");
		handleClose();
	};

	return (
		<Box sx={{ flexGrow: 1 }} component={"header"}>
			<AppBar
				position="static"
				sx={{
					background: `url(${bgNavbar})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "primary.main",
				}}
			>
				<Toolbar>
					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							alignItems: "center",
						}}
					>
						<LinkRouter to={"/"}>
							<img src={Logo} alt="keeper" />
						</LinkRouter>
					</Box>

					<Hidden smUp>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>

					{showMenu ? (
						<Hidden smDown>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 2,
								}}
							>
								<NavLink to={"/#planes"} style={{ textDecoration: "none" }}>
									<Typography
										sx={{
											color: "#ffffff",
											fontFamily: "Raleway",
											fontWeight: "bold",
										}}
									>
										Planes
									</Typography>
								</NavLink>
								<NavLink to={"/"} style={{ textDecoration: "none" }}>
									<Typography
										sx={{
											color: "#ffffff",
											fontFamily: "Raleway",
											fontWeight: "bold",
										}}
									>
										Contáctanos
									</Typography>
								</NavLink>
							</Box>
						</Hidden>
					) : null}

					<Divider
						orientation="vertical"
						variant="middle"
						sx={{ mx: 3, borderColor: "#999" }}
						flexItem
					/>

					{showMenu && !isAuth ? (
						<Stack direction="row" spacing={2} alignItems={"center"}>
							<NavLink to={"/auth/login"}>
								<Typography
									sx={{
										color: "#ffffff",
										fontFamily: "Raleway",
										fontWeight: "bold",
									}}
								>
									Iniciar sesión
								</Typography>
							</NavLink>

							<NavLink to={"/auth/register"}>
								<CustomButton
									component={"button"}
									sx={{
										px: 4,
										backgroundColor: "#ffffff",
										color: "primary.main",
										"&:hover": {
											backgroundColor: "#eeeeee",
										},
									}}
								>
									Registrarse
								</CustomButton>
							</NavLink>
						</Stack>
					) : null}

					{isAuth ? (
						<div>
							<Stack direction={"row"} spacing={1} marginLeft={2}>
								<Avatar
									alt="Nombre de usuario"
									src="/static/images/avatar/1.jpg"
								/>

								<Button
									disableRipple
									variant="contained"
									id="basic-button"
									aria-controls={open ? "basic-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									sx={{
										backgroundColor: "#ffffff",
										color: "primary.main",
										position: "relative",
										textTransform: "none",
										fontFamily: "Raleway",
										"&:hover": {
											backgroundColor: "#eeeeee",
										},
									}}
									endIcon={<ExpandMoreIcon />}
									onClick={handleClick}
								>
									{JSON.parse(localStorage.getItem("user")!).name}
								</Button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
								>
									{/* <MenuItem onClick={ () => {
                        navigate('/admin/my-acount');
                        handleClose();
                      }}>Mi Cuenta</MenuItem> */}
									<MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
								</Menu>
							</Stack>
						</div>
					) : null}
				</Toolbar>
			</AppBar>
		</Box>
	);
};
