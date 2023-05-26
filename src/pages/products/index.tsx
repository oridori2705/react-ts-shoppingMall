import { useQuery } from '@tanstack/react-query'
import { QueryKeys, fetcher } from "../../queryClient"
import { Productitem } from "../../components/product/item"


const Productlist =() =>{
    //useQuery로 데이터 요청
    const {data} = useQuery<Product[]>(QueryKeys.PRODUCTS, ()=>fetcher({
        method: "GET",
        path: "/products"
    }))
    console.log(data);
    return (
        <div>
            <ul className="products">
                {data?.map((product)=>(
                    <Productitem {...product} key={product.id} />
                ))}
            </ul>
        </div>
    )
} 

export default Productlist