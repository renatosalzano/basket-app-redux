import { useState } from "react";
import BasketList from "./BasketList";
import { IoBasketSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectPendings } from "../../app/basketSlice";

const BasketBtn = () => {
  const [showList, setShowList] = useState(false);
  const pendings = useSelector(selectPendings);
  return (
    <>
      <div
        className="basket-btn"
        onClick={() => setShowList((state) => !state)}
      >
        <IoBasketSharp />
        <div className="count">
          <span>{pendings.length}</span>
        </div>
      </div>
      {showList && <BasketList />}
      {showList && (
        <div className="trigger" onClick={() => setShowList(false)}></div>
      )}
    </>
  );
};

export default BasketBtn;
