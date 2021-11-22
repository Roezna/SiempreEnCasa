import { DivRow, Button, Text } from "../Styles";
import { colors } from "../Styles/colors";


const Cart = ({product, cart, setCart}) => {

      const handleCart = async (e, product) => {
 
         e.preventDefault();
   
         if (e.target.name === 'plus') {
   
            let addAmount = false;
            const cartCopy = [...cart]
            cartCopy.length > 0 && cartCopy.map(element => {
               if (element.product['product_id'] === product.product_id) {
                  element.amount += 1;
                  addAmount = true;
               }
            });
   
            if (!addAmount) {
               setCart([...cart, { product: product, amount: 1 }])
            }
            else {
               setCart(cartCopy)
            }
   
         }
         if (e.target.name === 'minus') {
   
            let quitAmount = false;
            const newCart = [...cart]
            newCart.length > 0 && newCart.map((element, indice) => {
               if (element.product['product_id'] === product.product_id) {
                  element.amount -= 1;
                  quitAmount = true;
   
                  if (element.amount === 0) {
   
                     newCart.splice(indice, 1)
                  }
               }
            });
   
            if (!quitAmount) {
   
               let index = cart.findIndex(elemento => elemento.product_id === product.product_id)
   
               if (index >= 0) {
   
                  const quitProductCart = [...cart];
                  quitProductCart.splice(index, 1)
                  setCart(quitProductCart)
               }
            }
            else {
               setCart(newCart)
            }
   
         }
   
      }
  
      const cartAmount = () => {
         let amount = 'Llevalo!';

         cart && cart.forEach(prod => {
            if(prod.product.product_id === product.product_id) amount = prod.amount
         });
         
         return amount

      }

   return (
      <DivRow space='center' marginTop='10px' align='center'>
         <Button name='plus' onClick={(e) => handleCart(e, product)} size='1.5em'>+</Button>
         <Text size='1.2em' color={colors.lightBlue} margin='0 10px'>{cartAmount()}</Text>
         <Button name='minus' onClick={(e) => handleCart(e, product)}  size='1.5em'>-</Button> 
      </DivRow>
   )

}

export default Cart;