import { Grid, Stack } from "@mui/material";

import { connect, useSelector } from "react-redux";

import ChangeMonthPanel from "./change-month.component";

import { DayTile } from "./day-tile.component";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../../redux-store/opeartions";

const Calendar = ({ setDate, setMonthData }: any) => {
  const date = useSelector((state: any) => state.date);
  const monthData = useSelector((state: any) => state.monthData);

  //TODO: doesn't re-render after changing monthData in change-month.component.tsx
  // calendarArray should be monthData
  
  // async function fetchData() {
  //   let data = await getMonthData(getAuthKey(), date.getMonth() + 1);
  //   setMonthData(data);
  // }
  // fetchData();
  var calendarArray = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <Stack
      id="calendar-container"
      justifyContent="space-between"
      sx={{ borderRadius: 3 }}
    >
      <ChangeMonthPanel />
      {
        //What is the purpose of this ?
        /* <Box>
        <p>pon</p>
        <p>wt</p>
        <p>śr</p>
        <p>czw</p>
        <p>pią</p>
        <p>sob</p>
        <p>niedz</p>
      </Box> */
      }
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
        //new Date(new Date(new Date().setMonth(date.getMonth())).setDate(1)).getDay()
        //albo lepiej, sprawdzac to w api
      }
      <Grid
        container
        alignItems="stretch"
        columns={7}
        sx={{ height: "100%", borderRadius: 3, overflow: "hidden" }}
      >
        {/* {new Date(
          new Date(new Date().setMonth(date.getMonth())).setDate(1)
        ).getDay()}{" "} */}
        {calendarArray.map((data: any,index :number) => (
          <DayTile data={data} key={index} />
        ))}

        {/* {
          //TODO: add unique key
          monthData[0] !== undefined
            ? monthData.map((data: any) => <DayTile data={data} />)
            : "Loading..."
        } */}
      </Grid>
    </Stack>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

// TODO: add function to all date to get number of days in month
// const monthDays = function () {
//   var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
//   return d.getDate();
// };
