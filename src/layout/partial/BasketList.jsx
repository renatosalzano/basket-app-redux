import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  reduceQuantity,
  selectPendings,
  buyProduct,
  removeItem,
  toggleClear,
  selectIsClear,
  clearPendings,
} from "../../app/basketSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoTrashSharp } from "react-icons/io5";
import { useEffect } from "react";

const BasketList = () => {
  const dispatch = useDispatch();
  const basket_list = useSelector(selectPendings);
  const isClear = useSelector(selectIsClear);
  useEffect(() => {
    return () => {
      if (isClear) {
        dispatch(toggleClear());
      }
    };
  });

  return (
    <ul className="basket-list">
      {basket_list.length === 0 && <li>Your Basket is Empty</li>}
      {basket_list.map((item, index) => (
        <li key={item.name + index}>
          <div className="info-box">
            <strong>{item.name}</strong>
            <span>{`Quantity: ${item.count}`}</span>
          </div>
          {isClear ? <DeleteBtn item={item} /> : <QuantityBtns item={item} />}
        </li>
      ))}
      {basket_list.length > 0 && <LowerButtons />}
    </ul>
  );
};

export default BasketList;

const LowerButtons = () => {
  const dispatch = useDispatch();
  const isClear = useSelector(selectIsClear);
  const basket_list = useSelector(selectPendings);
  const clear_all = () => {
    dispatch(clearPendings());
    return dispatch(toggleClear());
  };

  return (
    <div className="lower-button">
      {!isClear ? (
        <>
          <span className="clear-btn" onClick={() => dispatch(toggleClear())}>
            Clear
          </span>
          <span
            className="done-btn"
            onClick={() => dispatch(buyProduct(basket_list))}
          >
            Buy
          </span>
        </>
      ) : (
        <>
          <span className="clear-btn" onClick={clear_all}>
            All
          </span>
          <span className="done-btn" onClick={() => dispatch(toggleClear())}>
            Done
          </span>
        </>
      )}
    </div>
  );
};

const DeleteBtn = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="li-buttons">
      <span className="trash" onClick={() => dispatch(removeItem(item))}>
        <IoTrashSharp />
      </span>
    </div>
  );
};

const QuantityBtns = ({ item }) => {
  const dispatch = useDispatch();
  const reduce = (item) => {
    if (item.count > 1) {
      dispatch(reduceQuantity(item));
    } else {
      dispatch(removeItem(item));
    }
  };
  return (
    <div className="li-buttons">
      <span className="plus" onClick={() => dispatch(incrementQuantity(item))}>
        <AiOutlinePlus />
      </span>
      <span className="minus" onClick={() => reduce(item)}>
        <AiOutlineMinus />
      </span>
    </div>
  );
};
