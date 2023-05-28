import { useState } from "react";
import { CarContext } from "..";

export const CarContextProvider = ({ children }) => {
  const [car, setCar] = useState({
    carPrice: {
      value: "",
    },
    deliveryPrice: {
      value: "0",
    },
    insPrice: {
      value: "",
    },
    deliveryCity: {
      value: "",
    },
    auctionFee: {
      value: "0",
    },
    autionPlace: {
      value: "Copart",
    },
    fuelType: {
      value: "gasoline",
    },
    carAge: {
      value: "3",
    },
    carEngine: {
      value: "",
    },
    carType: {
      value: "sedan",
    },
    difference: {
      value: 1.24,
    },
  });
  const [course, setCourse] = useState(null);
  const [visible, setVisible] = useState(false);
  const [finale, setFinale] = useState(null);

  const getCourses = () => {
    fetch("https://cb.am/latest.json.php")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        if (data.USD) {
          setCourse(data.USD);
          setCar({ ...car, difference: { value: +data.EUR / +data.USD } });
        } else {
          setCourse(400);
        }
      })
      .catch((err) => {
        console.log(err);
        setCourse(400);
      });
  };
  return (
    <CarContext.Provider
      value={{
        car,
        setCar,
        visible,
        setVisible,
        finale,
        setFinale,
        getCourses,
        course,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
