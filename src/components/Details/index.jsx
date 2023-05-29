import { useContext } from "react";
import { CarContext } from "../../context";
import { Link } from "react-router-dom";
import "./styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import { DetailWrap } from "./DetailWrap";

export const Details = () => {
  const { finale, course } = useContext(CarContext);

  const toResult = () => {
    localStorage.setItem("finale", JSON.stringify(finale));
    localStorage.setItem("course", JSON.stringify(course));
  };

  if (!finale) {
    return (
      <div className="details_wrapper">
        <div className="load_wrapper">
          <CircularProgress />
        </div>
      </div>
    );
  }
  return (
    <>
      <DetailWrap finale={finale} course={course} />
      <Link to={"/result"} target="_blank" rel="noreferrer" onClick={toResult}>
        click
      </Link>
    </>
  );
};
