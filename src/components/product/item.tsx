
export const Productitem = ({
    id,
    title,
    price,
    category,
    description,
    image,
    rating
}: Product) => {
  return (
    <div>
        <li className='product-item'>
            <p className='product-item__catrgory'>{category}</p>
            <p className='product-item__title'>{title}</p>
            
            <img className='product-item__img' src = {image} />
            <span className='product-item__price' >${price}</span>
            <span className='product-item__rating'>{rating.rate}</span>

        </li>
    </div>
  )
}
