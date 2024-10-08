import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../Hooks/useFilters'

export function Filters() {
  const {filters,setFilters} = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  
  const handleChangeMinPrince = (event) => {
    setFilters(prevState =>({
      ... prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    setFilters(prevState =>({
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
        onChange={handleChangeMinPrince}
        value={filters.minPrice}
        />
        
        <span>${filters.minPrice}</span>
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