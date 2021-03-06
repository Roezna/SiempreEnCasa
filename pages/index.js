import ProductsCards from '../components/ProductsCards';
import AppLayout from '../components/AppLayout';
import { useState, useEffect } from "react";
import Categories from '../components/Categories';
import { DivColumn } from '../components/Styles/DivColumn';
import { DivRow } from '../components/Styles/DivRow';


const Index = ({ products, categories }) => {

    const cartOnStorage = (typeof window !== 'undefined' && JSON.parse(window.localStorage.getItem('cart'))) || [];

    const [cart, setCart] = useState(cartOnStorage !== [] ? cartOnStorage : []);
    const [categorie, setCategorie] = useState([]);
 
    useEffect(()=>{
      
          localStorage.setItem('cart', JSON.stringify(cart));
    
    },[cart])

    return (

        <DivColumn bg='white'>
           
            <AppLayout cart={cart} setCart={setCart}>
            

               <DivRow>
                <Categories categories={categories} categorie={categorie} setCategorie={setCategorie}/>
                <DivRow space='space-evenly'>
                    <ProductsCards products={products} cart={cart} setCart={setCart} categorie={categorie}/>
                </DivRow>
                </DivRow>

            </AppLayout>
        </DivColumn>
        

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