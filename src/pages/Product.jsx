import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FaPlus, FaMinus } from "react-icons/fa";


import { useGlobalContext } from "../hooks/useGlobalContext";

function Product() {
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  return (
    <>
      <form className="flex gap-6">
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="border border-gray-500 rounded-s-lg p-3 h-11"
          >
            <FaMinus/>
          </button>
          <input
            type="text"
            data-input-counter
            aria-describedby="helper-text-explanation"
            className="border border-gray-500 h-11 text-center w-full py-2.5 bg-transparent"
            placeholder="1"
            required
            autoComplete="off"
          />
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="border border-gray-500 rounded-e-lg p-3 h-11"
          >
            <FaPlus/>
          </button>
        </div>
        <button className="btn">Add</button>
      </form>
      <button className="btn btn-primary mt-4">BUY</button>
    </>
  );
}

export default Product;
