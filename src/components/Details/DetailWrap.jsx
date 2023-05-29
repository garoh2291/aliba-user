import { DetailItem } from "./DetailItem";

export const DetailWrap = ({ finale, course }) => {
  const price = (
    +finale.carPrice.value +
    +finale.duty.value +
    +finale.auctionFee.value +
    +finale.vat.value +
    +finale.deliveryPrice.value +
    +finale.eco.value +
    +finale.insPrice.value +
    75 +
    300
  ).toFixed(0);

  const priceUsd = new Intl.NumberFormat("en-US").format(price);
  const priceAmd = new Intl.NumberFormat("en-US").format(
    (price * course).toFixed(0)
  );
  return (
    <div className="details_wrapper">
      <div className="details_header">
        <DetailItem label={"Car Price"} price={finale.carPrice.value} />
        <DetailItem
          label={"Customs Duty"}
          price={+finale.duty.value.toFixed(0)}
        />
        <DetailItem label={"Auction Fee"} price={+finale.auctionFee.value} />
        <DetailItem label={"VAT"} price={finale.vat.value.toFixed(0)} />
        <DetailItem label={"Shipping"} price={+finale.deliveryPrice.value} />
        <DetailItem label={"Eco tax"} price={finale.eco.value.toFixed(0)} />
        <DetailItem
          label={"Insurance"}
          price={+finale.insPrice.value.toFixed(0)}
        />
        <DetailItem label={"Broker fee"} price={75} />
        <DetailItem label={"Service Fee"} price={300} />
      </div>
      <div className="details_footer">
        <div className="total_item">Total</div>
        <div className="total_price">
          <div className="price_item_total">{priceAmd} ֏</div>
          <div className="price_item_total">{priceUsd} $</div>
        </div>
      </div>
    </div>
  );
};
