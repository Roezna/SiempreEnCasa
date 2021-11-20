import { DivRow, Text, Button } from "./Styles";
import { colors } from "./Styles/colors";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDolly, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {

 
    return (
        <DivRow bg={colors.contrast} space='space-evenly'>
            <DivRow maxWidth='300px' margin='20px'>
                <Text size='2em' color={colors.white} ><FontAwesomeIcon icon={faDolly} style={{marginRight : "10px"}}/>Siempre en casa</Text> 
            </DivRow>
            <DivRow maxWidth='300px' margin='20px'>
            <Link href='/'><Button margin='0 10px' border='1px solid white'>Inicio</Button></Link>
            <Link href='/cart/'><Button margin='0 10px' border='1px solid white'><FontAwesomeIcon icon={faShoppingCart}/></Button></Link>
            </DivRow>
        </DivRow>
    )

}

export default Header;