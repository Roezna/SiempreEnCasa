import Head from 'next/head';
import Header from '../Header';

const AppLayout = ({ children }) => {

    return (
        <>

            <main>

                <Head>
                    <title>Siempre En Casa</title>
                </Head>

                <Header />
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