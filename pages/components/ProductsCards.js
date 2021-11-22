import { ImgProduct, CardProduct } from "./Styles";
import { Text } from "./Styles";
import { colors } from "./Styles/colors";
import Cart from "./cart/buttons";
import Link from "next/link";


const ProductsCards = ({products, cart, setCart}) => {


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
                    <Text size='2em' color={colors.orange}>${unity.total_price}</Text>
                   <Cart cart={cart} setCart={setCart} product={unity}/>
                </CardProduct>
                </Link>
            )
        })}
        </>
    )

}
export default ProductsCards;