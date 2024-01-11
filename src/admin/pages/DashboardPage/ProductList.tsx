import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Typography, Button, Grid } from "@mui/material";
import { Product } from "src/interfaces/Product";

import AddIcon from '@mui/icons-material/Add';

import { ModalConfirmDelete } from "./ModalConfirmDelete";
import { ModalViewProduct } from "./ModalViewProduct";
import { ProductCard } from "./ProductCard";

interface Props {
  isLoading: boolean,
  products: Product[],
}

export const ProductList = ({ isLoading, products }: Props) => {

  const navigate = useNavigate();

  const [isViewProductModalOpen, setIsViewProductModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState({} as Product);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [openedMenuProductId, setOpenedMenuProductId] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setOpenedMenuProductId(index);
  };

  const handleClose = () => {
    setOpenedMenuProductId(null);
  };

  const handleCreateProduct = () => {
    navigate("/admin/product/create");
  };
  
  const handleViewProduct = (index: number) => {
		setProductSelected(products[index]);
		setIsViewProductModalOpen(true);
    handleClose();
	};
  
  const handleEditProduct = (index: number) => {
    console.log({index});
		navigate(`/admin/product/edit/${products[index]._id}`);
	};

  const handleDelete = () => {
    setIsConfirmOpen(true);
    setOpenedMenuProductId(null);
  }

  return (
    <>
      {/* modal: view product */}
      <ModalViewProduct 
        isViewProductModalOpen={isViewProductModalOpen} 
        productSelected={productSelected}
        handleEditProduct={handleEditProduct}
        closeModal={ () => setIsViewProductModalOpen(false) }
        />

      {/* modal: confirm delete */}
      <ModalConfirmDelete 
        isConfirmOpen={isConfirmOpen}
        closeModal={ () => setIsConfirmOpen(false) }
      />
      
      {/* section: title/header */}
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ mb: 4 }} className="animate__animated animate__fadeIn">
				<Typography variant="h5" component={"h2"} fontWeight={"bold"}>
					Tus productos:
				</Typography>
				<Button 
          variant={"text"} 
          endIcon={<AddIcon />} 
          onClick={handleCreateProduct} >
					Crear producto
				</Button>
			</Stack>

      {/* section: product list */}
      { products.length <= 0 && isLoading
          ? (
            <Grid 
              container 
              className="animate__animated animate__fadeIn"
              justifyContent={'center'}
              mb={10}
              sx={{ border: '1px dashed #B3B3B3', borderRadius: 2 , paddingY: 8}}>
                <Grid item sx={{ color: '#B3B3B3', textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700}>Aún no tienes productos</Typography>
                  <Typography mb={2}>Comienza creando un producto</Typography>
                  <Button endIcon={<AddIcon />} onClick={handleCreateProduct}>Crear producto</Button>
                </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2} mb={10}>
              {
                products.map((product, index) => (
                  <ProductCard 
                    key={index} 
                    index={index}
                    product={product}
                    openedMenuProductId={ openedMenuProductId}
                    anchorEl={ anchorEl}
                    handleClick={ handleClick}
                    handleViewProduct={ handleViewProduct}
                    handleDelete={ handleDelete}
                    handleClose={ handleClose }
                    handleEditProduct={handleEditProduct}
                    />
                ))
              }
            </Grid>
          )}
    </>
  )
}
