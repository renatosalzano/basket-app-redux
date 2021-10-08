import React from "react";

interface Props {
  list: any[];
}

const PurchasedList: React.FunctionComponent<Props> = ({ list = [] }) => {
  const get_total = () => {
    const total = list.reduce((accumulator, current, currentIndex, array) => {
      accumulator = accumulator + current.count;
      return accumulator;
    }, 0);
    return total;
  };
  return (
    <ul>
      {list.map((item: any) => (
        <li key={item.name}>{`${item.count} x ${item.name}`}</li>
      ))}
      <span>{`Total: ${get_total()}`}</span>
    </ul>
  );
};

export default PurchasedList;
