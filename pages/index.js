import ProductsCards from './components/ProductsCards';
import { Products, Container } from './components/Styles';
import AppLayout from './components/AppLayout';

const Index = ({ products }) => {

    return (

        <Container>
            <AppLayout>
               
                <Products>
                    <ProductsCards products={products} />
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