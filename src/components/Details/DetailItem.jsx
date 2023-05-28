export const DetailItem = ({ label, price }) => {
  return (
    <div className="detail_item">
      <div className="item_name">
        <div
          className="price_label"
          style={{
            backgroundColor: "red",
          }}
        ></div>
        <p>{label}</p>
      </div>
      <div className="item_value">{price} $</div>
    </div>
  );
};
