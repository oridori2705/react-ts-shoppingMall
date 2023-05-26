import { useParams } from "react-router-dom";



const ProductDetail =() =>{
    const arr = useParams();
    
    return (
        <div>{arr.id}</div>
    )
} 

export default ProductDetail