import Head from 'next/head';
import Header from '../Header';

const AppLayout = ({ children, cart }) => {

    return (
        <>

            <main>

                <Head>
                    <title>Siempre En Casa</title>
                </Head>
        
                <Header cartActually={cart}/>
                {children}

            </main>

            <style jsx global>{`
            html, body{
                padding : 0;
                margin: 0;
                font-family: "Poppins", sans-serif;
            }
         `}
            </style>

        </>
    )
}

export default AppLayout;