import { DivRow, Text, Button } from "./Styles";
import { colors } from "./Styles/colors";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDolly, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import ShowCart from "./cart/showCart";

const Header = ({cartActually, setCart}) => {

    const [show, setShow] = useState(false)

    const showSideCart = () => {

        show === false ? setShow(true) : setShow(false)

    }
 
    return (
        <DivRow bg={colors.contrast} space='space-evenly'>
            <DivRow maxWidth='300px' margin='20px'>
                <Text size='2em' color={colors.white} ><FontAwesomeIcon icon={faDolly} style={{marginRight : "10px"}}/>Siempre en casa</Text> 
            </DivRow>
            <DivRow maxWidth='300px' margin='20px'>
            <Link href='/'><Button margin='0 10px' border='1px solid white'>Inicio</Button></Link>
            <Button margin='0 10px' border='1px solid white' onClick={() => showSideCart()}><FontAwesomeIcon icon={faShoppingCart}/><Text color={colors.lightBlue}>{' ' + cartActually.length}</Text></Button>
            </DivRow>
            {show && <ShowCart cart={cartActually} setCart={setCart} openClose={showSideCart}/>}
        </DivRow>
    )

}

export default Header;