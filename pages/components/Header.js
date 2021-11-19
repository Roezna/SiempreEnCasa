import { DivColumn, Text } from "./Styles";
import { colors } from "./Styles/colors";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDolly } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

 
    return (
        <DivColumn bg={colors.white}>
            <Text size='4em' color={colors.primary} margin="20px auto"><FontAwesomeIcon icon={faDolly} style={{marginRight : "10px"}}/>Siempre en casa</Text> 
            
        </DivColumn>
    )

}

export default Header;