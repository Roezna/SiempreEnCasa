import { ImgProduct, CardProduct } from "./Styles";
import { Text } from "./Styles";
import { colors } from "./Styles/colors";
import Cart from "./cart/buttons";
import Link from "next/link";
import Image from '../components/image/notFound.jpg';


const ProductsCards = ({products, cart, setCart, categorie}) => {

    return(
        <>
        {products && products.map((unity, index)=>{

            if(categorie && categorie.length > 0){ 

                let filter = [];

                filter = unity.categories && unity.categories.map((cat, i)=>{

                    if(categorie.includes(cat)){
         
                    return (
                        <Link href={`/products/${unity.product_id}`} key={index + i}>
                        <CardProduct maxWidth='250px'>
                            
                            <ImgProduct src={unity.image_url || Image} width='100%'/>
                            <Text size='1em' margin='15px' color={colors.secondary}>
                                {unity.name}
                            </Text>
                            <Text size='2em' color={colors.orange}>${unity.total_price}</Text>
                           <Cart cart={cart} setCart={setCart} product={unity}/>
                        </CardProduct>
                        </Link>
                    )
                }
                })
                return filter;
                }
                else{
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

                }
            })
        }
        </>
    )
}

export default ProductsCards;