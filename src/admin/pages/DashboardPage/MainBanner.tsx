import { Grid, Box, Card, CardMedia, CardContent, Typography } from "@mui/material"
import ImgDefault from "/src/assets/images/image-default.png";

interface MainBannerProps {
  logo: string | undefined,
  name: string | undefined,
}

export const MainBanner = ({ logo, name }: MainBannerProps) => {
  return (
    <Grid container direction={"column"} mb={5} className="animate__animated animate__fadeIn">
      <Grid item xs={12}>
        <Box
          sx={{
            height: 300,
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
            py: 10,
            px: 5,
            backgroundColor: "primary.main",
            backgroundImage: "url('src/assets/images/bg-banner.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            color: "#ffffff",
          }}
        ></Box>
      </Grid>

      <Grid container sx={{ marginTop: -20 }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}>
          <Card sx={{ padding: 1, borderRadius: 2 }}>
            {
              logo
                ? (
                  <CardMedia
                    sx={{ height: 280, borderRadius: 2, overflow: "hidden" }}
                    image={logo}
                    title="imagen-producto"
                  />
                ) : (
                  <img 
                    src={ImgDefault} 
                    alt="imagen-negocio" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    />
                )
            }
            <CardContent>
              <Typography variant="h6" fontWeight={"bold"}>
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}
