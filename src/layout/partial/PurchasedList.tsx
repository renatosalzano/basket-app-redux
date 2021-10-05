import React from "react";

interface Props {
  list: any[];
}

const PurchasedList: React.FunctionComponent<Props> = ({ list = [] }) => {
  return (
    <ul>
      {list.map((item: any) => (
        <li key={item.name}>{`${item.count} x ${item.name}`}</li>
      ))}
      <span>{`Total: ${list.length}`}</span>
    </ul>
  );
};

export default PurchasedList;
