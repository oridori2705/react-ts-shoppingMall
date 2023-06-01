import { useQuery } from '@tanstack/react-query'
import { QueryKeys, graphqlFetcher } from "../../queryClient"
import { Productitem } from "../../components/product/item"
import {GET_PRODUCTS,Products} from '../../graphql/produts'


export const Productlist =() =>{
    //useQuery로 데이터 요청
    //현재 리액트쿼리버전업데이트로 타입스크립트 정의방식이 바뀌었다. graphqlFetcher에도 타입을 지정해줘야한다.
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





