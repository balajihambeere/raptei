import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProductType } from '../products/types/Product';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useAppContext } from '../../ContextState';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Cart = (): React.ReactElement => {
    const { cartItems, removeFromCart } = useAppContext();
    return (
        <List>
            {cartItems && cartItems.map((item: ProductType) => {
                return (
                    <ListItem disablePadding key={item?.id}>
                        <Card sx={{ display: 'flex', mt: 1 }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 200 }}
                                image={item?.imageUrl}
                                alt={item?.name}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                        }}>
                                        <Typography component="div" variant="body1" style={{ width: 300 }}>
                                            {item?.name}
                                        </Typography>
                                        <IconButton sx={{ p: 0 }} onClick={() => { removeFromCart(item?.id) }}>
                                            <CloseIcon sx={{ display: { xs: 'flex' } }} />
                                        </IconButton>
                                    </Box>

                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {'Price: '} {item?.price}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {'Size:   '} {item?.size}
                                    </Typography>
                                </CardContent>
                            </Box>

                        </Card>
                    </ListItem>
                )
            })}
        </List>
    )
}
export default Cart