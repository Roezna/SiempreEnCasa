import { ImgProduct, CardProduct } from "./Styles";
import { Text, DivRow, Button } from "./Styles";
import { colors } from "./Styles/colors";
import Link from 'next/link';
import { useState } from "react";/* 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"; */

const ProductsCards = ({products}) => {

    const [cart, setCart] = useState([]);

    const handleCart = (e, product) => {

         e.preventDefault();

         if(e.target.name === 'plus'){
              setCart([...cart, product])
              console.log(cart)
         }
         else{
              let index = cart.findIndex(elemento => elemento.product_id === product.product_id)

              console.log(index)

             if(index >= 0){ 
              cart.splice(index, 1)
              console.log(cart)
              setCart(cart)
            return
            }
            else{
                return
            }
         }

    }

    return(
        <>
        {products && products.map((unity, index)=>{

            return (
                <Link href={`/products/${unity.product_id}`} key={index}>
                <CardProduct maxWidth='250px'>
                    
                    <ImgProduct src={unity.image_url} width='100%'/>
                    <Text size='1em' margin='15px' color={colors.secondary}>
                        {unity.name}
                    </Text>
                    <Text size='2em' color={colors.contrast}>${unity.total_price}</Text>
                    <DivRow space='space-evenly' marginTop='10px'>
                    <Button name='plus' onClick={(e) => handleCart(e, unity)}>Agregar</Button>
                    <Button name='minus' onClick={(e) => handleCart(e, unity)}>Quitar</Button> 
                    </DivRow>
                </CardProduct>
                </Link>
            )
        })}
        </>
    )

}
export default ProductsCards;