import { Divider, Grid } from "@mui/material";

export const DayTile = ({ data }: any) => {
  if (data[0] !== undefined) {
    return (
      <>
        <Grid item xs={1} id="tile">
          {/* {//TODO: define functional component mapData() to clean this mess} */}
          {data.incomes.map((item: any) => {
            const key = data.incomes.indexOf(item);
            return (
              <p key={key}>
                - {item.amount} <br />
                {item.from}
                <br />
                {item.description}
                <br />
              </p>
            );
          })}
          {data.expenses.map((item: any, index :number) => {
            return (
              <p key={index}>
                + {item.amount}
                <br />
                {item.from}
                <br />
                {item.description}
                <br />
              </p>
            );
          })}
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
      </>
    );
  } else {
    return <Grid item xs={1} id="tile"></Grid>;
  }
};
