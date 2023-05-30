import {gql} from "graphql-tag";
//쿼리를 만든 것임 mocks의 핸들러에서 graphql.query를 하기위해 필요한 것
export type Product = {
    id:string
    imageUrl : string
    price : number
    title : string
    description : string
    createdAt : number
}

export type Products ={
    products : Product[]
}

//기존에 클라이언트에서 types.ts로 정의해줬지만 여기서 또 따로 작성했다.
export const GET_PRODUCTS =gql`
    query GET_PRODUCTS {
        id
        imageUrl
        price
        title
        description
        createdAt
    }
`

export const GET_PRODUCT =gql`
    query GET_PRODUCT($id: stirng) {
        id
        imageUrl
        price
        title
        description
        createdAt
    }
`
