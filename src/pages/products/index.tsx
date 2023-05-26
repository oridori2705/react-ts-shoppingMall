import { useQuery } from "@tanstack/react-query"
import { QueryKeys, fetcher } from "../../queryClient"
import { Productitem } from "../../components/product/item"


const Productlist =() =>{
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