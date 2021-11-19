import Head from 'next/head';

const AppLayout = ({children}) => {

    return (
        <>
                 
         <main>
             {children}
                <Head>
                    <title>Siempre En Casa</title>
                </Head>
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