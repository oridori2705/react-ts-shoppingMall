import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { QueryKeys, fetcher } from "../../queryClient";
import ProductDetail from "../../components/product/detail";



const ProductDetailpage =() =>{
    const arr = useParams();
    const {data} = useQuery<Product>([QueryKeys.PRODUCTS,arr.id], ()=>fetcher({ //useParams를 통해 가져온 id로 해당 상품의 정보를 가져온다.
        method: "GET",
        path: `/products/${arr.id}`
    }))
    if (!data) return null;
    
    return (
        <div>
            <h2>
                상품목록
            </h2>
            <ProductDetail item={data} />
        </div>
        
      
    )
} 

export default ProductDetailpage