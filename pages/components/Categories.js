import { DivRow, DivColumn, Text, Button } from "./Styles"
import { colors } from "./Styles/colors";


const Categories = ({categories, categorie ,setCategorie}) => {

    const handleCategorie = (e) => {
        e.preventDefault();
        if(categorie.includes(e.target.name)){
            e.target.style.background = '';
            e.target.style.color = '';
            let index = categorie.indexOf(e.target.name)
            let copy = [...categorie];
            copy.splice(index, 1);
            setCategorie(copy)

        }
        else{
            setCategorie([...categorie, e.target.name])
            e.target.style.background = colors.primary;
            e.target.style.color = 'white';
        }
        
    }

    return(
        <DivColumn margin='10px auto' height='100%' align='center'>
            <Text size='1.6em' color={colors.lightBlue} margin='10px'>Filtrar por</Text>
            <DivRow >
                {categories && categories.map((categorie, i)=>{

                    return(
                        <Button key={i} margin='5px' name={categorie} size='1.3em' bg='white' color={colors.secondary} 
                        hoverColor='none' border={`2px solid ${colors.primary}`} padding='5px 10px' onClick={(e) => handleCategorie(e)}>
                        {categorie}
                        </Button>
                    )

                })}
            </DivRow>
        </DivColumn>
    )
}

export default Categories;