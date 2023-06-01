import { Link } from "react-router-dom"
import { Product} from "../../graphql/produts"
import { useRecoilState } from "recoil";
import { cartItemSelector } from "../../recoils/cart";

export const Productitem = ({
    id,
    title,
    price,
    description,
    imageUrl,
    createdAt
}: Product) => {
  const [cartAmount,setCartAmount] =useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount(prev => (prev || 0 ) +1 );

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
        <button onClick={addToCart}>담기</button>
        <span>{cartAmount || 0 }</span>
    </div>
  )
}
