import './Filters.css'
import { useId, useState } from 'react'

export function Filters({ onChange }) {
  const [minPrice,setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  
  const handleChangeMinPrince = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState =>({
      ... prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    onChange(prevState =>({
      ... prevState,
      category: event.target.value
    }))
  }
  



  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
        type="range" 
        name="" 
        id={minPriceFilterId} 
        min="0" 
        max="1000" 
        onChange={handleChangeMinPrince}/>
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}> Categoría </label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="laptops">Laptops</option>
          <option value="beauty">belleza</option>
          <option value="smartphones">Celulares</option>

        </select>
      </div>
    </section>
  )
}