import { Box, Button } from "@mui/material";

import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../redux-store/opeartions";
import { connect, useSelector } from "react-redux";

import { getMonthData } from "../../fetches";

//TODO getAuthKey()
const authKey = "";

//TODO fix this shit m8
//TypeError: date.getMonth is not a function. (In 'date.getMonth()', 'date.getMonth' is undefined)

const ChangeMonthPanel = ({ setDate, setMonthData }: any) => {
  const date = useSelector((state: any) => state.date);
  return (
    <Box id="change-month-panel">
      <Button
        variant="contained"
        onClick={async () => {
          setDate(date.setMonth(date.getMonth() - 1));
          let data = await getMonthData(authKey, date.getMonth() + 1);
          setMonthData(data);
        }}
      >
        {"<<<"}
      </Button>
      <p>{date.getMonth() + 1 + "/" + date.getFullYear()}</p>
      <Button
        variant="contained"
        onClick={async () => {
          setDate(date.setMonth(date.getMonth() + 1));
          let data = await getMonthData(authKey, date.getMonth() + 1);
          setMonthData(data);
        }}
      >
        {">>>"}
      </Button>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeMonthPanel);
