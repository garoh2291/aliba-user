import { useContext } from "react";
import { CarContext } from "../../context";

export const Shipping = () => {
  const { car, setCar } = useContext(CarContext);

  const changeShipping = (e) => {
    const cost = e.target.value;
    setCar({ ...car, deliveryPrice: { value: cost } });
  };

  return (
    <div>
      <div
        className="input_label"
        style={{
          padding: "10px 0px",
        }}
      >
        <label htmlFor="shipping">Shipping</label>
        <input
          type="number"
          name="shipping"
          id="shipping"
          placeholder="0"
          value={car.deliveryPrice.value}
          disabled={car.deliveryCity.value !== "Etc"}
          onChange={changeShipping}
        />
      </div>{" "}
    </div>
  );
};
