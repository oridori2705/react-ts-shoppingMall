import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import {RequestDocument, request} from 'graphql-request';
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
        //react-Query에서 옵션을 줘야한다. (캐시정책) -쓸데없는 요청들은 없앤 것
        // cacheTime : 1000 * 60 * 60 * 24 -> 1일 ->기본값은 5분으로, unused / inactive 캐시 데이터를 메모리에서 유지시킬 시간,cacheTime이 지나기 전에 쿼리 인스턴스가 다시 마운트 되면, 데이터를 fetch하는 동안 캐시 데이터를 보여준다.
        // staleTime : 1000  * 60 -> 1분 -> 데이터가 한번 fetch 되고 나서 staleTime이 지나지 않았다면 unmount 후 mount 되어도 fetch가 일어나지 않는다.-> 캐시를 이용해서 페이지를 이동했다가 다시 되돌아올 때 재요청을 안한다.
        // refetchOnMount : false, //쿼리의 새 인스턴스가 마운트 될 때 (refetchOnMount),mount되었을 때 refetch 여부를 결정한다. true라면 stale 상태일 때 refetch 합니다
        // refetchOnReconnect : false, //네트워크가 끊어졌다가 다시 연결될 때 (refetchOnReconnect)
        // refetchOnWindowFocus : false -> // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부입니다
        if(!client) client = new QueryClient({
            defaultOptions :{
                queries: {
                    cacheTime : 1000 * 60 * 60 * 24,
                    staleTime : 1000  * 60,
                    refetchOnMount : false,
                    refetchOnReconnect : false,
                    refetchOnWindowFocus : false
                }

            }
        })
        return client;
    }
})()


const BASE_URL = 'https://fakestoreapi.com'

//API를 요청하는 fetcher -> fake API는 MSW사용 이후로 안씀 
// export const restFetcher = async ({
//     method,
//     path,
//     body,
//     params
// }:{
//     method : 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
//     path : string,
//     body? : AnyOBJ
//     params? : AnyOBJ
// })=>{
//     try{
//         //요청하는 클라이언트에서 받아온 path로 기본서버주소 baseURL과 합쳐서 정의한다.
//         let url = `${BASE_URL}${path}`;
//         //RequestInit은 fetchRequest용으로 노드에서 제공해서 따로 타입을 만든게 아니다.
//         const fetchOptions : RequestInit = {
//             method,
//             headers : {
//                 'Content-Type':'application/json',
//                 'Access-Control-Allow-Origin' : BASE_URL
//             }
//         }
//         if(params){
//             const searchParams = new URLSearchParams(params);
//             url += '?' + searchParams.toString();
//             console.log(url);
//         }
        
//         if(body) fetchOptions.body = JSON.stringify(body);
        
//         const res=await fetch(url,fetchOptions); //method와 path 값을 받아서 url을 만든다. HTML5의 fetch를 사용할 수 있게끔
//         const json = await res.json();
//         return json;
//     }catch(err){
//         console.log(err);
//     }
// }

//현재 리액트쿼리버전업데이트로 타입스크립트 정의방식이 바뀌었다. graphqlFetcher에도 타입을 지정해줘야한다.
//react-query버전 업데이트에 따라서 <T>를 넣어주고 fetcher부분에도 타입을 지정해줘야한다.
export const graphqlFetcher = <T>(query: RequestDocument, variables = {}) =>
  request<T>(BASE_URL, query, variables)


//요청할 데이터를 구분하는 key
//useQuery를 하려면 Querykey와 fechert함수가 필요하다.
export const QueryKeys ={
    PRODUCTS : 'PRODUCTS',
}