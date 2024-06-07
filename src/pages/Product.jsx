import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const {id} = useParams();
    const {data , setData , error} = useFetch("https://dummyjson.com/products/" + id)
    console.log(data);
  return <div>Product</div>;
}

export default Product;
