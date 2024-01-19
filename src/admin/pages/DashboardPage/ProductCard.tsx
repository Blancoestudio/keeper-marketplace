import { Grid, Card, CardMedia, Stack, Typography, Box, IconButton, Menu, MenuItem, CardContent, Divider, CardActions, Button } from "@mui/material"
import { Product } from "src/interfaces/Product"
import { calculateDiscount } from "src/utils/helpers"

import PendingIcon from '@mui/icons-material/Pending';
import { useMemo } from "react";

interface ProductCardProps {
  index: number,
  product: Product,
  openedMenuProductId: number | null,
  anchorEl: null | HTMLElement,
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void,
  handleViewProduct: (index: number) => void,
  handleDelete: () => void,
  handleClose: () => void,
  handleEditProduct: (index: number) => void,
}

export const ProductCard = ({ index, product, openedMenuProductId, anchorEl, handleClick, handleViewProduct, handleDelete, handleClose, handleEditProduct }: ProductCardProps) => {

  const { discount, name, shortDescription, price } = product;

  const cutShortDescription = useMemo(() => {
    return shortDescription.length > 65
        ? `${shortDescription.substring(0, 65)}...`
      : shortDescription;
  }, [shortDescription])

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="animate__animated animate__fadeIn">
      <Card sx={{ padding: 1.25, borderRadius: 2, paddingBottom: 0 }}>
        <CardMedia
          sx={{ height: 220, borderRadius: 2, overflow: "hidden" }}
          // image={product.images}
          title="imagen-producto"
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{
                backgroundColor: "#FD8900",
                color: "#ffffff",
                paddingX: 0.75,
                paddingY: 0.25,
                borderBottomRightRadius: 8,
                fontWeight: "bold",
              }}
            >
              {`-${discount}%`}
            </Typography>
            <Box>
              <IconButton
                size="small"
                sx={{ paddingY: 0.35, paddingX: 0.35, color: "#ffffff" }}
                id={"actions-product-button"}
                aria-haspopup="true"
                // aria-controls={open ? `${index}` : undefined}
                // aria-expanded={open ? "true" : undefined}
                onClick={(event) => handleClick(event, index)}
              >
                <PendingIcon />
              </IconButton>
              <Menu
                id={"actions-product-button"}
                anchorEl={anchorEl}
                open={openedMenuProductId === index}
                onClose={handleClose}
                elevation={1}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }} 
                >
                <MenuItem 
                  onClick={() => handleViewProduct(index)}
                  >Ver</MenuItem>
                <MenuItem 
                  onClick={() => handleEditProduct(index)}
                  >Editar</MenuItem>
                <MenuItem 
                  onClick={() => handleDelete()}
                >
                  Eliminar
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </CardMedia>

        <CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
          <Typography gutterBottom variant="h5" fontWeight={"medium"}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ height: '3em' }}>
            {cutShortDescription}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Stack direction={"row"} alignItems={"baseline"} spacing={1}>
            <Typography
              variant="h6"
              color={"primary"}
              fontWeight={"medium"}
            >
              {`$${calculateDiscount(price, discount)}`}
            </Typography>
            <Typography
              variant="body2"
              color={"#717171"}
              fontWeight={"medium"}
              sx={{ textDecoration: "line-through" }}
            >
              {price}
            </Typography>
          </Stack>
          <Divider sx={{ mt: 1 }} />
        </CardContent>

        <CardActions 
          sx={{ display: "flex" }}                      
          onClick={() => handleViewProduct(index)}
        >
          <Button size="small">Ver producto</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
