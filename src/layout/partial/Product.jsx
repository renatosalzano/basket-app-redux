import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addItem } from "../../app/basketSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch(addItem);
  const [test, setTest] = useState(false);
  const add_item = () => {
    dispatch(addItem(product));
    setTest(true);
  };
  return (
    <div className="product">
      <span
        className={`add-btn ${test ? "animate" : ""}`}
        onClick={add_item}
        onAnimationEnd={() => setTest(false)}
      >
        <IoIosAddCircleOutline />
      </span>

      <span>{product.name}</span>
    </div>
  );
};

export default Product;
