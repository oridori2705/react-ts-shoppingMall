import { Link } from "react-router-dom"
import { Product} from "../../graphql/produts"

export const Productitem = ({
    id,
    title,
    price,
    description,
    imageUrl,
    createdAt
}: Product) => {
  return (
    <div>
        <li className='product-item'>
          <Link to={`/products/${id}`}>
            
            <p className='product-item__title'>{title}</p>
            <p className='product-item__title'>{description}</p>
            <img className='product-item__img' src = {imageUrl} />
            <span className='product-item__price' >${price}</span>
            <p className='product-item__title'>{createdAt}</p>
          </Link>
        </li>
    </div>
  )
}
