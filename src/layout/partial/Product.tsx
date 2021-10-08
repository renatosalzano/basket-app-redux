import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addItem } from "../../app/basketSlice";

interface Props {
  product: any;
}
const Product: React.FunctionComponent<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const [reset, setReset] = useState(false);
  const add_item = () => {
    dispatch(addItem(product));
    setReset(true);
  };
  return (
    <div className="product">
      <span
        className={`add-btn ${reset ? "animate" : ""}`}
        onClick={add_item}
        onAnimationEnd={() => setReset(false)}
      >
        <IoIosAddCircleOutline />
      </span>

      <span>{product.name}</span>
    </div>
  );
};

export default Product;
