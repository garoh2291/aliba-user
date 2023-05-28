import { Delivery } from "./Delivery";
import { ImportService } from "./ImportService";

export const CalcForm = () => {
  return (
    <div className="calc_form_wrap">
      <Delivery />
      <ImportService />
    </div>
  );
};
