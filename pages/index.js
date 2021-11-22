import ProductsCards from './components/ProductsCards';
import { Products, Container } from './components/Styles';
import AppLayout from './components/AppLayout';
import { useState, useEffect } from "react";


const Index = ({ products }) => {

    const cartOnStorage = (typeof window !== 'undefined' && JSON.parse(window.localStorage.getItem('cart'))) || [];

    const [cart, setCart] = useState(cartOnStorage !== [] ? cartOnStorage : []);
 
    useEffect(()=>{
      
          localStorage.setItem('cart', JSON.stringify(cart));
    
    },[cart])

    return (

        <Container>
            <AppLayout cart={cart}>
               
                <Products>
                    <ProductsCards products={products} cart={cart} setCart={setCart}/>
                </Products>

            </AppLayout>
        </Container>



    )



}

export default Index;


export async function getServerSideProps(){

    const getProducts = await fetch('http://localhost:6000/products')
    const data = await getProducts.json()

    return { 

        props : {   
            products : data
        }

    };
}