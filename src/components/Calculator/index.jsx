import { CalcForm } from "./CalcForm";
import Button from "@mui/material/Button";

import "./styles.css";
import { CarContext } from "../../context";
import { useContext, useEffect } from "react";
import { URL } from "../../data";
import { handleCheck } from "../../helpers";
import { Details } from "../Details";
import { onError } from "../../utils/toaster";

export const Calculator = () => {
  const { car, setCar, visible, setVisible, setFinale, getCourses } =
    useContext(CarContext);
  useEffect(() => {
    getCourses();
  }, []);

  const getDetails = () => {
    if (handleCheck(car)) {
      setVisible(true);
      fetch(`${URL}/fob/getImport`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
      }).then((res) => {
        res.json().then((data) => {
          setFinale(data);
        });
      });
    } else {
      onError("Please fill all fields");
    }
  };
  return (
    <>
      <div className="calculator_wrapper">
        <div className="main_content">
          <div className="heading">
            <p>
              Below calculator allows you to count the auction fee, shipping,
              insurance and customs clearance according to the 2020 EEC tariffs.
            </p>
          </div>
          <CalcForm />
          <Button
            sx={{
              marginTop: "20px",
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": { backgroundColor: "#2c2c2c", color: "#fff" },
            }}
            variant="contained"
            onClick={getDetails}
          >
            CALCULATE
          </Button>
        </div>
      </div>
      {visible && <Details />}
    </>
  );
};
