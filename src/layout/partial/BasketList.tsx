import { memo } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { selectPendings, selectIsClear } from "../../app/basketSlice";
import { DeleteBtn, LowerButtons, QuantityBtns } from "./ListButtons";

interface Props {
  triggerClick: any;
}
const BasketList: React.FunctionComponent<Props> = ({ triggerClick }) => {
  const basket_list = useSelector(selectPendings);
  const isClear = useSelector(selectIsClear);

  return (
    <>
      <ul className="basket-list">
        <div className="basket-head">
          <span className="close-btn" onClick={triggerClick}>
            <VscArrowLeft />
          </span>
        </div>
        {basket_list.length === 0 && <li>Your Basket is Empty</li>}
        {basket_list.map((item: any, index: number) => (
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
      <div className="trigger" onClick={triggerClick} />
    </>
  );
};

export default memo(BasketList);
