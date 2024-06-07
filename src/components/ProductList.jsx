import ProductCard from "./ProductCard";
function ProductList({ data }) {
  return (
    <ul className="flex flex-wrap justify-between gap-8 mt-10">
      {data.products.map((product) => {
        return (
            <ProductCard key={product.id} product={product} />
        )
      })}
    </ul>
  );
}

export default ProductList;
