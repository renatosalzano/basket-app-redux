import { useSelector } from "react-redux";
import { selectPurchased } from "../app/basketSlice";
import PurchasedList from "./partial/PurchasedList";

const Purchased: React.FunctionComponent = () => {
  const purchased_list = useSelector(selectPurchased);
  const format_date = (date: string) => {
    return new Date(date).toLocaleString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="purchased">
      {purchased_list.map((item: any) => (
        <div key={item.date} className="purchased-list">
          <strong>{format_date(item.date)}</strong>
          <PurchasedList list={item.products} />
        </div>
      ))}
    </div>
  );
};

export default Purchased;
