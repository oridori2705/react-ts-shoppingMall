const ProductDetail =({
    item:{
        category,
        title, 
        image,
        description,
        price, 
        rating:{rate}
    }

}:{
   item : Product 
})=>{


    return (
        <div>
            <div className='product-item'>
                <p className='product-item__catrgory'>{category}</p>
                <p className='product-item__title'>{title}</p>
                <p className='product-item__title'>{description}</p>
                <img className='product-item__img' src = {image} />
                <span className='product-item__price' >${price}</span>
                <span className='product-item__rating'>{rate}</span>
            </div>
        </div>
        
    )
}

export default ProductDetail;