import ProductsCards from './components/ProductsCards';
import { Products, Container, DivRow } from './components/Styles';
import AppLayout from './components/AppLayout';
import { useState, useEffect } from "react";
import Categories from './components/Categories';


const Index = ({ products, categories }) => {

    const cartOnStorage = (typeof window !== 'undefined' && JSON.parse(window.localStorage.getItem('cart'))) || [];

    const [cart, setCart] = useState(cartOnStorage !== [] ? cartOnStorage : []);
    const [categorie, setCategorie] = useState([]);
 
    useEffect(()=>{
      
          localStorage.setItem('cart', JSON.stringify(cart));
    
    },[cart])

    return (

        <Container>
            <AppLayout cart={cart} setCart={setCart}>

               <DivRow space='space-around'>
                <Categories categories={categories} categorie={categorie} setCategorie={setCategorie}/>
                <Products>
                    <ProductsCards products={products} cart={cart} setCart={setCart} categorie={categorie}/>
                </Products>
                </DivRow>

            </AppLayout>
        </Container>



    )



}

export default Index;


export async function getServerSideProps(){

    const getProducts = await fetch('http://localhost:6000/products')
    const products = await getProducts.json()

    const getCategories = await fetch('http://localhost:6000/categories')
    const categories = await getCategories.json()


    return { 

        props : {   
            products,
            categories

        }

    };
}