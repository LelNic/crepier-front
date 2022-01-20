import { Link } from 'react-router-dom'
import { strLimit } from '../../services/services.js'
import Button from '../Button/Button.jsx'
import './Item.css'

const Item = ({ item }) => {
  return (
    <div className="ServiceCard">
      <img className="img-service-card" src={item.image} alt={item.name} />
      <h2 className="h2-service-card">{item.name}</h2>
      <p className="description">
        {strLimit(item.description)}
        <Link to={`/services/${item.id}`}>
          <span className="link-service-card">Afficher plus...</span>
        </Link>
      </p>
      <p className="price">{item.price}</p>
      <Button text="Voir Plus" />
    </div>
  )
}
export default Item
