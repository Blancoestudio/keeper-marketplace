import { Typography, Grid, Paper } from "@mui/material"

const indicators = [
	{
		title: "Haz obtenido",
		data: 8,
		dataName: "visitas a tu perfil",
	},
	{
		title: "Haz aparecido en",
		data: 15,
		dataName: "búsquedas",
	},
	{
		title: "Se han contactado",
		data: 20,
		dataName: "personas contigo",
	},
	{
		title: "Haz aparecido en",
		data: 15,
		dataName: "búsquedas",
	},
];

export const Indicators = () => {
  return (
    <>
      <Typography variant="h5" component={"h2"} fontWeight={"bold"} mb={4} className="animate__animated animate__fadeIn">
        Indicadores:
      </Typography>

      <Grid container spacing={2} mb={10} justifyContent={"space-between"} alignItems={"center"} className="animate__animated animate__fadeIn">
        {indicators.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Paper
              elevation={3}
              sx={{ paddingX: 2, paddingY: 6, borderRadius: 2 }}
            >
              <Typography variant="h6" textAlign={"center"}>
                {item.title}
              </Typography>
              <Typography variant="h2" textAlign={"center"} fontWeight={"bold"}>
                {item.data}
              </Typography>
              <Typography variant="h6" textAlign={"center"}>
                {item.dataName}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
