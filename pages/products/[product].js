import { ImgProduct } from "../../components/Styles/ImgProduct";
import AppLayout from "../../components/AppLayout";
import { DivColumn } from "../../components/Styles/DivColumn";
import { DivRow } from "../../components/Styles/DivRow";
import { Text } from "../../components/Styles/Text";
import { colors } from "../../components/Styles/colors";
import ProductsCards from "../../components/ProductsCards";
import Cart from "../../components/cart/buttons";
import { useState, useEffect } from "react";



const ProductDetail = ({ product, recommendation }) => {

    const cartOnStorage = (typeof window !== 'undefined' && JSON.parse(window.localStorage.getItem('cart'))) || [];

    const [cart, setCart] = useState(cartOnStorage !== [] ? cartOnStorage : []);
 
    useEffect(()=>{
      
          localStorage.setItem('cart', JSON.stringify(cart));
    
    },[cart])

    return (
        <AppLayout cart={cart} setCart={setCart}>
            <DivColumn>
                {product === 'none' ?
                    <Text color={colors.primary}>Producto no encontrado</Text>
                : 
                <DivColumn>
                    <DivRow space='space-evenly'>
                        
                    <DivRow maxWidth='400px' margin='20px auto'>
                    <ImgProduct src={product.image_url} width='100%'/>
                    </DivRow>
                    <DivColumn maxWidth='700px'>
                    <Text size='2em' margin='15px' color={colors.secondary}>
                        {product.name}
                    </Text>
                    <Text size='2.5em' color={colors.orange}>${product.total_price}</Text>
                    <Text size='14px'>Precio por unidad: ${product.price_per_unit}</Text>
                    
                    <DivRow margin='20px auto'>
                    <Cart cart={cart} setCart={setCart} product={product}/>
                    </DivRow>
                    </DivColumn>
                    </DivRow>

                   
                    <Text size='2em' color={colors.contrast} margin='20px auto'>Te recomendamos</Text>
                    <DivRow bg={colors.contrast}>
                        {recommendation && <ProductsCards products={recommendation} cart={cart} setCart={setCart}/>}
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