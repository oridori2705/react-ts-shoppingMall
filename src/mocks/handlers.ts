import { graphql } from 'msw'
import {v4 as uuid} from 'uuid' //uuid v4는 랜덤으로 uuid를 가져온다.
import {GET_PRODUCTS, GET_PRODUCT } from '../graphql/produts'

//mocks를 만든다 -> 임의의 배열을 20개 랜덤 초기화데이터를 만들기위해서
const mockproducts = Array.from({length:20}).map((_,i)=>({
    id: uuid(), //uuid 랜덤설정
    imageUrl : `https://placeimg.com/640/480/any/${i+1}`, //샘플이미지임
    price : 60000,
    title : `임시상품${i+1}`,
    description : `임시상세내용${i+1}`,
    createdAt : new Date(1646735501883+(i*1000*60)).toString(),

}))

export const handlers = [
    // Handles a "GetUserInfo" query를 했을 때 아래를 수행한다.
    //GET_PRODUCTS는 graphQL에서 만든 products.ts파일에서 데이터를 정의해 준것이다.
    graphql.query(GET_PRODUCTS, (req,res,ctx)=>{

        //쿼리요청으로 보내줄 데이터
        return res(
            ctx.data({
              products: mockproducts, //만든 랜덤한 데이터를 여기에 넣는다.
                
              
            }),
          )
    }),
    graphql.query(GET_PRODUCT, (req,res,ctx)=>{

        
        return res(ctx.data(mockproducts[0]))
            
    }),
  ]