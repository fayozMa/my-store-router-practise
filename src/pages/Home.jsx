import {useFetch} from '../hooks/useFetch'
import ProductList from '../components/ProductList'
function Home() {
  const { data,isPending,error} = useFetch("https://dummyjson.com/products")
  return (
    <div>
      {isPending && <span className="loading loading-spinner loading-lg"></span>}
      {data && <ProductList data={data}/>}
    </div>
  )
}

export default Home