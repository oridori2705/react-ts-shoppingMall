import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { QueryKeys, graphqlFetcher } from "../../queryClient";
import ProductDetail from "../../components/product/detail";
import { GET_PRODUCT, Product } from "../../graphql/produts";



const ProductDetailpage =() =>{
    const {id} = useParams();
    const {data} = useQuery<Product>([QueryKeys.PRODUCTS, id], 
        ()=>graphqlFetcher<Product>(GET_PRODUCT, { id }),)
    if (!data) return null;
    
    return (
        <div>
            <h2>
                상품상세
            </h2>
            <ProductDetail item={data} />
        </div>
        
      
    )
} 

export default ProductDetailpage