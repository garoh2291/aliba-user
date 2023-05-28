import copart from "../../assets/coopart.png";
import aii from "../../assets/logo.svg";

export const Auction = ({ label, cb, selected }) => {
  const isSelected = selected === label;
  const image = label === "Copart" ? copart : aii;
  return (
    <div
      className={`${isSelected ? "selected_item" : ""} auction_item`}
      onClick={() => cb(label)}
    >
      {label === "Other" ? label : <img src={image} alt={label} />}
    </div>
  );
};
