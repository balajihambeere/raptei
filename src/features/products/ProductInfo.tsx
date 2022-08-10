import { ReactElement, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { ProductType } from "./ProductType";

interface ProductInfoProps {
    selectedItem: ProductType;
};

const ProductInfo = (props: ProductInfoProps): ReactElement => {
    const { selectedItem } = props;
    const [selectedSize, setSelectedSize] = useState('1');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedSize(event.target.value as string);
    };

    const handleAddtoCart = () => {
        // dispatch(addToCartAction({ ...selectItem, selectSize: Number(selectedSize) }));
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8}>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%'
                        }}
                        alt={selectedItem?.name}
                        src={selectedItem?.imageUrl}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <Box>
                        <Typography variant="h5" color="text.secondary">
                            {selectedItem?.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
                            {`Size: ${selectedItem?.size}`}
                        </Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }} >
                            <Grid item md={6}>
                                {/* <Box> */}
                                <FormControl sx={{ width: 80 }}>
                                    <Select
                                        labelId="size-select-label"
                                        id="size-simple-select"
                                        value={selectedSize}

                                        onChange={handleChange}>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* </Box> */}
                            </Grid>
                            <Grid item md={6}>
                                <Button variant="contained" size="large" onClick={handleAddtoCart} >Add to Cart</Button>
                            </Grid>
                        </Grid>
                        <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
                            PRODUCT STORY
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
                            {selectedItem?.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default ProductInfo;