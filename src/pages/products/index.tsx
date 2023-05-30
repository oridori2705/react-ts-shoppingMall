import { useQuery } from '@tanstack/react-query'
import { QueryKeys, graphqlFetcher } from "../../queryClient"
import { Productitem } from "../../components/product/item"
import {GET_PRODUCTS,Products} from '../../graphql/produts'


const Productlist =() =>{
    //useQuery로 데이터 요청
    const { data } = useQuery<Products>([QueryKeys.PRODUCTS], 
        () =>graphqlFetcher<Products>(GET_PRODUCTS));
    console.log(data);
    return (
        <div>
            
            <ul className="products">
                {data?.products?.map((product)=>(
                    <Productitem {...product} key={product.id} />
                ))}
            </ul>
        </div>
    )
} 

export default Productlist