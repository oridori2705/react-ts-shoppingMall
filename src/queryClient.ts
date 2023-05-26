import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  //import { getTodos, postTodo } from '../my-api'
  
  //POST나 PUT 같은 경우는 body가 필요하므로
  //그래서 body는 올수도 있고 안올수도 있어서 body? : AnyOBJ 했다.
  type AnyOBJ = {[key:string] : any}

  // Create a client
  //원래는 const queryClient = new QueryClient()
  //이렇게해서 getClient를 하는 건데
  //일단 client라는 변수를 선언해놓고 만약 클라이언트안에 값이 없다면 new QueryClient를 해줘서 값을 반환하는 것이다.
  //이렇게 해주는 이유는 페이지를 전환할 때마다 const queryClient = new QueryClient() 이게 실행이 되면
  //기존에 불러온 데이터를 다시 요청하게되는 상황이 발생한다. 그래서 불러왔다면 그걸 그대로 사용하기 위해서이다,
  //하지만 nextjs에서는 이렇게 작성안해도될 수 있다.
  export const getClient =(()=> {
    let client : QueryClient | null =null;
    return () =>{
        if(!client) client = new QueryClient({

        })
        return client;
    }
})()


const BASE_URL = 'https://fakestoreapi.com'

//API를 요청하는 fetcher
//
export const fetcher = async ({
    method,
    path,
    body,
    params
}:{
    method : 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    path : string,
    body? : AnyOBJ
    params? : AnyOBJ
})=>{
    try{
        //요청하는 클라이언트에서 받아온 path로 기본서버주소 baseURL과 합쳐서 정의한다.
        const url = `${BASE_URL}${path}`;
        //RequestInit은 fetchRequest용으로 노드에서 제공해서 따로 타입을 만든게 아니다.
        const fetchOptions : RequestInit = {
            method,
            headers : {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin' : BASE_URL
            }
        }
        const res=await fetch(url,fetchOptions); //method와 path 값을 받아서 url을 만든다. HTML5의 fetch를 사용할 수 있게끔
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}
//요청할 데이터를 구분하는 key
//useQuery를 하려면 Querykey와 fechert함수가 필요하다.
export const QueryKeys ={
    PRODUCTS : ['PRODUCTS'],
}