import { Product } from "../../graphql/produts";

const ProductDetail =({
    item:{
        id,
        title, 
        imageUrl,
        description,
        price, 
        
    }

}:{
   item : Product 
})=>{


    return (
        <div>
            <div className='product-item'>
                <p className='product-item__title'>{title}</p>
                <p className='product-item__title'>{description}</p>
                <img className='product-item__img' src = {imageUrl} />
                <span className='product-item__price' >${price}</span>
                
            </div>
        </div>
        
    )
}

export default ProductDetail;