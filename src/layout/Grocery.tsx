import Product from "./partial/Product";
import res from "../assets/res.json";

const Grocery: React.FunctionComponent = () => {
  return (
    <div className="grocery">
      {res.products.map((product: any) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Grocery;
