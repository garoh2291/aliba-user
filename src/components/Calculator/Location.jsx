import { useContext, useEffect, useState } from "react";
import { Select } from "antd";
const { Option } = Select;

import { URL } from "../../data";
import { CarContext } from "../../context";

export const Location = () => {
  const { car, setCar } = useContext(CarContext);
  const [cities, setCities] = useState([{ _id: "1", city: "Etc", price: 0 }]);
  useEffect(() => {
    fetch(`${URL}/cities/all`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.error) {
          cb();
          throw new Error(data.error.message);
        }
        setCities((prev) => [...data, ...prev]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDelivery = (value) => {
    const { price, city } = cities.find(({ city }) => city === value);
    setCar({
      ...car,
      deliveryPrice: { value: price },
      deliveryCity: { value: city },
    });
  };
  return (
    <div>
      <p>Location</p>
      {
        <Select
          placeholder="Default Port"
          style={{ width: "100%", marginTop: "10px" }}
          showSearch
          onSelect={handleDelivery}
        >
          {cities.map((city) => (
            <Option key={city._id} value={city.city}>
              {city.city}
            </Option>
          ))}
        </Select>
      }
    </div>
  );
};
