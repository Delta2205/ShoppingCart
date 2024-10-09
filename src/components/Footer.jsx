import './Footer.css'
import { useFilters } from '../Hooks/useFilters'
import { useCart } from '../Hooks/useCart'

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      {
        // JSON.stringify(filters,null,2)
      }
      {/* {
        JSON.stringify(cart,null,2)
      } */}
      <u>
      <h4>Estimado usuario esta carrito de compras fue hecho con un json pro lo que las imagenes no cargan mil disculpas</h4>
      </u>
      <h4>hecha con React⚛️ － <span>@deltacode</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}