import { Button, Grid } from "@mui/material";

import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../redux-store/opeartions";
import { connect, useSelector } from "react-redux";

import { getAuthKey, getMonthData } from "../../fetches";

const ChangeMonthPanel = ({ setDate, setMonthData }: any) => {
  const date = useSelector((state: any) => state.date);

  return (
    <Grid container id="change-month-panel">
      <Grid item xs={4}></Grid>
      <Grid item xs={1}>
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
      </Grid>
      <Grid item xs={2}>
        <p>
          {date.toLocaleString("default", { month: "long" }) +
            " " +
            date.getFullYear()}
        </p>
      </Grid>
      <Grid item xs={1}>
        {" "}
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
      </Grid>
      <Grid item xs={12}>
      <p>
        Dzień tygodnia pierwszego dnia miesiąca:
        {
          //week starts with sunday (0)
          new Date(
            new Date(new Date().setMonth(date.getMonth())).setDate(1)
          ).toLocaleString("default", { weekday: "long" })
        }
      </p>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeMonthPanel);
