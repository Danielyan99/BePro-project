import { Link } from "react-router-dom"

const Pathway = () => {
  return (
    <div className='pathway'>
      <h2 className='pathway-title'>Men’s Lifestyle Clothing</h2>
      <ul className='pathway-list'>
        <li className='pathway-list__item'>
          <Link to='/'>home</Link>
        </li>
        <i className='fas fa-caret-right'></i>
        <li className='pathway-list__item'>
          <Link to='/catalog'>catalog</Link>
        </li>
        <i className='fas fa-caret-right'></i>
        <li className='pathway-list__item'>
          <Link to='/catalog'>men</Link>
        </li>
        <i className='fas fa-caret-right'></i>
        <li className='pathway-list__item'>
          <Link to='/catalog'>clothing</Link>
        </li>
      </ul>
    </div>
  )
}

export default Pathway
