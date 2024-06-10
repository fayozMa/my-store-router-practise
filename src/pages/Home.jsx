import {useFetch} from '../hooks/useFetch'
import ProductList from '../components/ProductList'
function Home() {
  const { data,isPending,error} = useFetch("https://dummyjson.com/products")
  return (
    <div>
      {isPending && <span className="loading loading-spinner w fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"></span>}
      {data && <ProductList data={data}/>}
      {isPending && <div className="overlay fixed top-0 left-0 bottom-0 w-full bg-black/50"></div>}
    </div>
  )
}

export default Home