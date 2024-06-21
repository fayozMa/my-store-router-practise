import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function Product() {
  const { addProduct } = useContext(GlobalContext);
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  const [amount, setAmount] = useState(0);
  const handleAdd = () => {
    addProduct(...data, amount);
  };
  return (
    <div className="mt-10 mb-20">
      {data && (
        <div className="flex gap-56">
          <div>
            <img src={data.thumbnail} className="w-96" alt="" />
            <div className="flex items-center gap-4 mb-10 pl-28  mt-9">
              <buttton
                onClick={() => setAmount(amount < 2 ? amount : amount - 1)}
                className="btn btn-secondary"
              >
                -
              </buttton>
              <div>{amount}</div>
              <button
                onClick={() => setAmount(amount + 1)}
                className="btn btn-secondary"
              >
                +
              </button>
              <button onClick={handleAdd}>Add</button>
            </div>
          </div>
          <div className="w-96">
            <h1 className="text-4xl font-medium ">{data.title}</h1>
            <div className=" flex items-center gap-44 mt-2 border-b-2 pb-2">
              <h1 className="text-3xl font-medium">{data.brand}</h1>
              <h1 className="text-lg border rounded-lg p-2 text-blue-600 font-semibold">
                {data.category}
              </h1>
            </div>
            <div className="border-b-2 py-5">
              <p className="text-2xl font-medium mt-2">About Product :</p>
              <p className="font-medium">{data.description}</p>
              <p className="font-medium text-lg mt-5 text-yellow-500">Rating: {data.rating}</p>
            </div>
            <div className="border-b-2 py-5">
            <p className="text-2xl font-semibold">Product Price : </p>
            <p className="font-medium text-lg text-rose-600">
              You Have Discount : {data.discountPercentage}%
            </p>
            <p className="font-medium text-lg">Price : <span className="underline">{data.price}</span>$</p>
            <p className="font-medium text-lg">Warranty : {data.warrantyInformation}</p>
            </div>
            <p className="text-2xl font-semibold">About Shipping : </p>
            <p className=" font-medium text-lg">Shipping : {data.shippingInformation}</p>
            <p className=" font-medium text-lg">Sku : {data.sku}</p>
            <p className=" font-medium text-lg">Product weight : {data.weight}kg</p>
            <p className=" font-medium text-lg">How many left : {data.stock}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export { useFetch };
export default Product;
