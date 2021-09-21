import { Button, Stack } from "@mui/material";

import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../redux-store/opeartions";
import { connect, useSelector } from "react-redux";

import { getAuthKey, getMonthData } from "../../fetches";

const ChangeMonthPanel = ({ setDate, setMonthData }: any) => {
  const date = useSelector((state: any) => state.date);

  return (
    <Stack 
    direction="row"
    justifyContent="space-between"
    alignItems="center">
      <p>
        {date.toLocaleString("default", { month: "long" }) +
          " " +
          date.getFullYear()}
      </p>
      <Stack direction="row" spacing={.5}>
      <Button
        variant="contained"
        onClick={async () => {
          var changed = new Date();
          changed.setMonth(date.getMonth() - 1);
          setDate(changed);
          let data = await getMonthData(getAuthKey(), date.getMonth() - 1);
          setMonthData(data);
        }}
      >
        {"<"}
      </Button>
      <Button
        variant="contained"
        onClick={async () => {
          var changed = new Date();
          setDate(changed);
          let data = await getMonthData(getAuthKey(), date.getMonth() + 1);
          setMonthData(data);
        }}
      >
        {"Today"}
      </Button>
      <Button
        variant="contained"
        onClick={async () => {
          var changed = new Date();
          changed.setMonth(date.getMonth() + 1);
          setDate(changed);
          let data = await getMonthData(getAuthKey(), date.getMonth() + 1);
          setMonthData(data);
        }}
      >
        {">"}
      </Button>
      </Stack>
      {/* <p>
        Dzień tygodnia pierwszego dnia miesiąca:
        {
          //week starts with sunday (0)
          new Date(
            new Date(new Date().setMonth(date.getMonth())).setDate(1)
          ).toLocaleString("default", { weekday: "long" })
        }
      </p> */}
    </Stack>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeMonthPanel);
