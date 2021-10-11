import { memo, useCallback, useEffect, useRef } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { selectPendings, selectIsClear, toggleClear } from "../../app/basketSlice";
import { DeleteBtn, LowerButtons, QuantityBtns } from "./ListButtons";

interface Props {
  toggle_list: any;
}
const BasketList: React.FunctionComponent<Props> = ({ toggle_list }) => {
  const dispatch = useDispatch();
  const basket_list = useSelector(selectPendings);
  const isClear = useSelector(selectIsClear);

  const wrapperRef = useRef(null);

  const check_if_is_clear = useCallback(() => {
    if (isClear) {
      dispatch(toggleClear());
    }
  }, [dispatch, isClear]);

  const is_click_outside = useCallback(
    (evt: Event) => {
      let ref: any = wrapperRef?.current;
      if (!ref || ref.contains(evt.target)) {
        // --> click inside
        return;
      }
      // --> click outside
      check_if_is_clear();
      return toggle_list();
    },
    [toggle_list, check_if_is_clear]
  );

  function get_total() {
    const total = basket_list.reduce((accumulator: any, current: any) => {
      accumulator = accumulator + current.count;
      return accumulator;
    }, 0);
    return total;
  }

  useEffect(() => {
    document.addEventListener("click", is_click_outside);
    return () => {
      document.removeEventListener("click", is_click_outside);
    };
  }, [check_if_is_clear, is_click_outside]);

  return (
    <>
      <ul className="basket-list" ref={wrapperRef}>
        <div className="basket-head">
          <span className="total">
            Total amount: <strong>{get_total()}</strong>
          </span>
          <span className="close-btn" onClick={toggle_list}>
            <VscArrowLeft />
          </span>
        </div>
        {basket_list.length === 0 && (
          <span className="list-empty-message">Your basket is empty...</span>
        )}
        <div className="scroll-wrapper">
          {basket_list.map((item: any, index: number) => (
            <li key={item.name + index} className={item.name.replace(/ /g, "")}>
              <div className="info-box">
                <strong>{item.name}</strong>
                <span>{`Quantity: ${item.count}`}</span>
              </div>
              {isClear ? <DeleteBtn item={item} /> : <QuantityBtns item={item} />}
            </li>
          ))}
        </div>
        {basket_list.length > 0 && <LowerButtons />}
      </ul>
      {/* <div className="trigger" onClick={triggerClick} /> */}
    </>
  );
};

export default memo(BasketList);
