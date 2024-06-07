import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    id,
    brand,
    price,
    category,
    title,
    rating,
    description,
    returnPolicy,
    shippingInformation,
    stock,
    thumbnail,
    warrantyInformation,
    weight,
    discountPercentage,
  } = product;
  return (
    <li>
      <Link to={`/product/${id}`} className="card w-96 bg-base-100 shadow-xl">
      <img src={thumbnail} alt="product image" className="rounded-t-lg"/>
      <div className="card-body">
        <h1 className="text-xl">{brand}</h1>
        <h2 className="card-title">{title}</h2>
        <h3 className="badge badge-outline font-medium text-base p-4">{category}</h3>
        <p className="text-base font-medium">{"Rating : "+rating}</p>
        <h4 className="card-title">{"Price : "+"$"+price}</h4>
      </div>
    </Link>
    </li>
  );
}

export default ProductCard;
