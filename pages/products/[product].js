import Link from "next/link";
import { ImgProduct } from "../components/Styles";
import AppLayout from "../components/AppLayout";
import { DivColumn, Button, DivRow, Text } from "../components/Styles";
import { colors } from "../components/Styles/colors";
import ProductsCards from "../components/ProductsCards";

const ProductDetail = ({ product, recommendation }) => {

    return (
        <AppLayout>
            
            <Link href='/'><Button margin='20px'>Inicio</Button></Link>
            <DivColumn>
                {product === 'none' ?
                    <Text color={colors.primary}>Producto no encontrado</Text>
                : 
                <DivColumn>
                    <DivRow space='space-evenly'>
                        
                    <DivRow maxWidth='50%'>
                    <ImgProduct src={product.image_url} width='100%' maxWidth='400px'/>
                    </DivRow>
                    <DivColumn maxWidth='50%'>
                    <Text size='2em' margin='15px' color={colors.secondary}>
                        {product.name}
                    </Text>
                    <Text size='2.5em' color={colors.contrast}>${product.total_price}</Text>
                    <Text size='1em'>Precio por unidad: ${product.price_per_unit}</Text>
                    </DivColumn>
                    </DivRow>
                    
                    <Text size='2em' color={colors.contrast} margin='20px auto'>Te recomendamos</Text>
                    <DivRow bg={colors.primary}>
                        {recommendation && <ProductsCards products={recommendation}/>}
                    </DivRow>

                </DivColumn>
                }
            </DivColumn>

        </AppLayout>
    )

}

export async function getServerSideProps({ params }) {

    
    const getRecommendations = await fetch(`http://localhost:6000/recommendations?product_id=${params.product}`)
    const dataRecommendation = await getRecommendations.json()

    const getProducts = await fetch('http://localhost:6000/products')
    const data = await getProducts.json()

    const product = await data.find(prod => prod.product_id === params.product);

    const recommendation = []
    
    dataRecommendation[0].recommendations.map(id => {

         data.forEach((element) => {
            
            if(element.product_id === id){
                recommendation.push(element)
            }

        });

    })

    if (product) {

        return {

            props: {
                product,
                recommendation 
            }

        };
    }
    else {
        return {

            props: {
                product: 'none'
            }

        };
    }


}

export default ProductDetail;