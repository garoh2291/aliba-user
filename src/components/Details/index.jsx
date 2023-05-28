import { useContext, useEffect } from "react";
import { CarContext } from "../../context";
import "./styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import { DetailWrap } from "./DetailWrap";

export const Details = () => {
  const { finale, course } = useContext(CarContext);

  if (!finale) {
    return (
      <div className="details_wrapper">
        <div className="load_wrapper">
          <CircularProgress />
        </div>
      </div>
    );
  }
  return <DetailWrap finale={finale} course={course} />;
};
