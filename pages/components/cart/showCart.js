import { useEffect, useState } from "react";
import { DivRow, Text, Button, DivColumn, ImgProduct } from "../Styles";
import { colors } from "../Styles/colors";
import Cart from "./buttons";

const ShowCart = ({cart, openClose, setCart}) =>{

    const [view, setView] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{

        let priceActually = 0; 

        cart && cart.forEach((product)=>{
            priceActually += product.amount * product.product.total_price;
        })

        setTotalPrice(priceActually)

    },[cart])

    const handleClose = () => {
         setView(false);
        setTimeout(openClose, 500) 
    }


    return(
        <DivRow position='fixed' capa='2' bg={colors.primary} height='100%' maxWidth='500px' right='0' animation={view} align='flex-start' overflow='scroll'>
            <DivRow height='25px' space='flex-start' margin='5px 5px'>
                <Button onClick={() => handleClose()} bg={colors.red} hoverColor='red'>X</Button>
            </DivRow>   
            {cart.length > 0 ?
            <DivColumn >
            {cart && cart.map((product, indice)=>{
                return (
                    <DivRow bg={colors.contrast} key={indice} space='flex-start' align='center' margin='5px'>
                    <DivRow maxWidth='120px' space='flex-start'>
                    <ImgProduct  src={product.product.image_url} maxWidth='100%' margin='5px' />
                    </DivRow>
                    <DivRow maxWidth='250px' align='space-around' margin='5px auto'>
                    <Text color={colors.white} size='1.1em'>{product.product.name}</Text>
                    <Text color={colors.lightBlue} margin='5px 5px' size='15px'>Cantidad: {product.amount}</Text>
                    <Text color={colors.orange} margin='5px 5px' size='15px'>Precio: ${product.product.total_price}</Text>
                    <Cart cart={cart} setCart={setCart} product={product.product}/>
                    </DivRow>
                    </DivRow>
                )
            })}
            {totalPrice !== 0 &&
            <DivRow  margin='10px auto'>
                <Button bg={colors.contrast} padding='5px 10px' >Total a pagar ${totalPrice}</Button>
            </DivRow>}
            </DivColumn> 
            :
            <DivColumn>
                <Text color={colors.lightBlue} margin='10px auto' size='2em'>Carrito de compras vacio</Text>
                <Button onClick={() => handleClose()} bg={colors.contrast} padding='5px 10px'>¡Quiero comprar!</Button>
            </DivColumn> 
            }
            
            
        </DivRow>
    )
}

export default ShowCart;