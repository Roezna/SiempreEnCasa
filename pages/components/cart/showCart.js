import { DivRow, Text, Button } from "../Styles";
import { colors } from "../Styles/colors";


const ShowCart = ({cart, openClose}) =>{


    return(
        <DivRow position='fixed' capa='2' bg={colors.primary} height='100%' maxWidth='500px' right='0' animation='true'>
            <DivRow>
                <Button onClick={() => openClose()}>X</Button>
            </DivRow>
            {cart && cart.map((product)=>{
                return (
                    <Text size="1em">{product.product.name}</Text>
                )
            })}
        </DivRow>
    )
}

export default ShowCart;