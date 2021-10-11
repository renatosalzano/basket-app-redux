import { memo } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDelete,
  buyProduct,
  clearPendings,
  incrementQuantity,
  reduceQuantity,
  selectIsClear,
  selectPendings,
  toggleClear,
} from "../../app/basketSlice";

export const LowerButtons: React.FunctionComponent = memo(() => {
  const dispatch = useDispatch();
  const isClear = useSelector(selectIsClear);
  const basket_list = useSelector(selectPendings);

  function clear_all() {
    const basketList: HTMLElement | any = document.querySelector(".basket-list");
    basketList?.classList.add("clear-all");
    setTimeout(() => {
      basketList.classList.remove("clear-all");
      dispatch(clearPendings());
      dispatch(toggleClear());
    }, 200);
    return;
  }

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
  function delete_item(item: any) {
    const li_item = document.querySelector(`.${item.name.replace(/ /g, "")}`);
    li_item?.classList.add("remove-item");
    dispatch(asyncDelete(item));
  }
  function reduce(item: any) {
    if (item.count > 1) {
      dispatch(reduceQuantity(item));
    } else {
      delete_item(item);
    }
  }
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
  function delete_item(item: any) {
    const li_item = document.querySelector(`.${item.name.replace(/ /g, "")}`);
    li_item?.classList.add("remove-item");
    dispatch(asyncDelete(item));
  }
  return (
    <div className="li-buttons">
      <span className="trash" onClick={() => delete_item(item)}>
        <VscChromeClose />
      </span>
    </div>
  );
});
