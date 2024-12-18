import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './Hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


function App() {
  const [products] = useState(initialProducts)
  const {filterProducts,filters} = useFilters()
  //Llamado al sistema  
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
        <Header />
        <Cart/>
        <Products products={filteredProducts} />
       {IS_DEVELOPMENT && <Footer />}

    </CartProvider>
  )
}

export default App
