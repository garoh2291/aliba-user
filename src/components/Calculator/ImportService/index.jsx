import { useContext } from "react";
import { CarContext } from "../../../context";
import "./styles.css";
import { Select } from "antd";
const { Option } = Select;

export const ImportService = () => {
  const { car, setCar } = useContext(CarContext);

  const handleFuel = (value) => {
    setCar({ ...car, fuelType: { value } });
  };

  const handleAge = (value) => {
    setCar({ ...car, carAge: { value } });
  };

  const handleEngine = (e) => {
    const engine = e.target.value;
    setCar({ ...car, carEngine: { value: engine } });
  };

  const handleType = (value) => {
    setCar({ ...car, carType: { value } });
  };

  return (
    <div className="car_import_section">
      <div>
        <p>Fuel Type</p>
        {
          <Select
            placeholder="Fuel Type"
            style={{ width: "100%", marginTop: "10px" }}
            onSelect={handleFuel}
            defaultValue={"gasoline"}
          >
            <Option value={"gasoline"}>Gasoline</Option>
            <Option value={"hybrid"}>Hybrid</Option>
          </Select>
        }
      </div>
      <div>
        <p>Age</p>
        {
          <Select
            placeholder="Age"
            style={{ width: "100%", marginTop: "10px" }}
            onSelect={handleAge}
            defaultValue={"3"}
          >
            <Option value={"3"}>Up to 3 years</Option>
            <Option value={"5"}>3 - 5 years </Option>
            <Option value={"7"}>5 - 7 years </Option>
          </Select>
        }
      </div>
      <div className="input_label">
        <label htmlFor="engine">
          Engine ,sm<sup style={{ fontSize: "10px" }}>3</sup>
        </label>
        <input
          type="number"
          name="engine"
          id="engine"
          placeholder="0"
          value={car.carEngine.value}
          onChange={handleEngine}
        />
      </div>
      <div
        style={{
          padding: "10px 0px",
        }}
      >
        <p>Vehicle Type</p>
        {
          <Select
            placeholder="Vehicle Type"
            style={{
              width: "100%",
              marginTop: "10px",
            }}
            onSelect={handleType}
            defaultValue={"sedan"}
          >
            <Option value={"sedan"}>Sedan</Option>
          </Select>
        }
      </div>
    </div>
  );
};
