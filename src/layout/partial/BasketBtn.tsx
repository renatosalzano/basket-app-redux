import React, { memo, useCallback, useState } from "react";
import BasketList from "./BasketList";
import { IoBasketSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectPendings } from "../../app/basketSlice";

const BasketBtn: React.FunctionComponent = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const pendings = useSelector(selectPendings);

  const toggle_list = useCallback(() => {
    setShowList((state) => !state);
  }, []);

  return (
    <>
      <div className="basket-btn" onClick={toggle_list}>
        <IoBasketSharp />
        <div className="count">
          <span>{pendings.length}</span>
        </div>
      </div>
      {showList && <BasketList toggle_list={toggle_list} />}
    </>
  );
};

export default memo(BasketBtn);
