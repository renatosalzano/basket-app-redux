import { memo, useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoTrashBinSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  buyProduct,
  clearPendings,
  incrementQuantity,
  reduceQuantity,
  removeItem,
  selectIsClear,
  selectPendings,
  toggleClear,
} from "../../app/basketSlice";

export const LowerButtons: React.FunctionComponent = memo(() => {
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
          <span className="done-btn" onClick={() => dispatch(buyProduct(basket_list))}>
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
});

interface Props {
  item: any;
}

export const QuantityBtns: React.FunctionComponent<Props> = memo(({ item }) => {
  const dispatch = useDispatch();
  const reduce = useCallback(
    (item: any) => {
      if (item.count > 1) {
        dispatch(reduceQuantity(item));
      } else {
        dispatch(removeItem(item));
      }
    },
    [dispatch]
  );
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
});

export const DeleteBtn: React.FunctionComponent<Props> = memo(({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="li-buttons">
      <span className="trash" onClick={() => dispatch(removeItem(item))}>
        <IoTrashBinSharp />
      </span>
    </div>
  );
});
