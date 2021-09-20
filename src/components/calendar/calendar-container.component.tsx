import { getMonthData } from "../../fetches";

import { Box, Button } from "@mui/material";

import { connect, useSelector } from "react-redux";

import ChangeMonthPanel from "./change-month.component";

import { DayTile } from "./day-tile.component";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../../redux-store/opeartions";

const Calendar = () => {
  const date = useSelector((state: any) => state.date);
  const monthData = useSelector((state: any) => state.monthData);
  return (
    <Box id="calendar-container">
      <ChangeMonthPanel />
      <Box>
        <p>pon</p>
        <p>wt</p>
        <p>śr</p>
        <p>czw</p>
        <p>pią</p>
        <p>sob</p>
        <p>niedz</p>
      </Box>
      {
        //tu trzeba wymyslic funkcje, zeby wrzucalo przed dni puste kafelki
        //if pierwszy dzien miesiaca !== pon to wstawia puste kafelki
        // (new Date(date.getFullYear(), date.getMonth()+1, 1).getDay()+1 !==1 )?
        // (for(let i =0; i<=new Date(date.getFullYear(), date.getMonth()+1, 1).getDay()+1;i++){
        // <DayTile
        // />
        //}
        //     ''
        // ): ('')
        //albo lepiej, sprawdzac to w api
        //TODO doesn't work , undefined is not a function
        // monthData.map((data: any)=>(
        //     <DayTile
        //     data = {data}
        //     />
        // ))
      }
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

// TODO add function to all date to get number of days in month
// const monthDays = function () {
//   var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
//   return d.getDate();
// };
