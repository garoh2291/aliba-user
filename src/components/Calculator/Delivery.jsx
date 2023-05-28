import React, { useContext } from "react";
import { CarContext } from "../../context";
import { Auction } from "./Auction";
import { Location } from "./Location";
import { Shipping } from "./Shipping";

export const Delivery = () => {
  const { car, setCar } = useContext(CarContext);

  const changeAutionFee = (e) => {
    setCar({ ...car, autionPlace: { value: e }, auctionFee: { value: 0 } });
  };

  const handlePrice = (e) => {
    const carPrice = e.target.value;
    setCar({ ...car, carPrice: { value: carPrice } });
  };

  const changeOtherFee = (e) => {
    const fee = e.target.value;
    setCar({ ...car, auctionFee: { value: fee } });
  };

  return (
    <div className="car_delivery_section">
      <div className="input_label">
        <label htmlFor="price">Car Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="0"
          onChange={handlePrice}
        />
      </div>
      <div>
        <p>Auctions</p>
        <div className="aution_type">
          <Auction
            label={"Copart"}
            cb={changeAutionFee}
            selected={car.autionPlace.value}
          />
          <Auction
            label={"AII"}
            cb={changeAutionFee}
            selected={car.autionPlace.value}
          />
          <Auction
            label={"Other"}
            cb={changeAutionFee}
            selected={car.autionPlace.value}
          />
          <input
            type="number"
            name="fee"
            id="fee"
            className="auction_fee_input"
            value={car.auctionFee.value}
            disabled={car.autionPlace.value !== "Other"}
            onChange={changeOtherFee}
          />
        </div>
      </div>
      <Location />
      <Shipping />
    </div>
  );
};
