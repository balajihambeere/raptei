import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductType } from './ProductType';
import Container from '@mui/material/Container';
import Link from 'next/link';

interface ProductsProps {
    products: any;
}

const Products = (props: ProductsProps): React.ReactElement => {
    const { products } = props;

    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        products && products?.map((item: ProductType) => {
                            return (
                                <Grid item xs={12} md={3} key={item.id}>
                                    <Link href={`/${item.slug}`}  >
                                        <Card style={{ textDecoration: 'none', cursor: 'pointer', height: '20vw' }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={item.imageUrl}
                                                alt="green iguana"
                                            />
                                            <CardContent style={{ marginTop: "auto" }}>
                                                <Grid
                                                    container item xs={12}
                                                >
                                                    <Grid item xs={9}>
                                                        <Typography gutterBottom component="div">
                                                            {item.name}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.price}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Container >
    );
}

export default Products;