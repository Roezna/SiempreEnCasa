import { ImgProduct, CardProduct } from "./Styles";
import { Text } from "./Styles";
import { colors } from "./Styles/colors";
import Link from 'next/link';

const ProductsCards = ({products}) => {


    return(
        <>
        {products && products.map((unity, index)=>{

            return (
                <Link href={`/products/${unity.product_id}`} key={index}>
                <CardProduct >
                    
                    <ImgProduct src={unity.image_url} width='100%'/>
                    <Text size='1em' margin='15px' color={colors.secondary}>
                        {unity.name}
                    </Text>
                    <Text size='2em' color={colors.contrast}>${unity.total_price}</Text>
                </CardProduct>
                </Link>
            )
        })}
        </>
    )

}
export default ProductsCards;