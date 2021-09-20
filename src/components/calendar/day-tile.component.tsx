export const DayTile = ({ data }: any) => {
  if (data !== undefined) {
    return (
      <div id="expenses-adder">
        {/* {//TODO: define function mapData() to clean this mess} */}
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
        {data.expenses.map((item: any) => {
          const key = data.expenses.indexOf(item);
          return (
            <p key={key}>
              + {item.amount}
              <br />
              {item.from}
              <br />
              {item.description}
              <br />
            </p>
          );
        })}
      </div>
    );
  } else {
    return <div id="expenses-adder"></div>;
  }
};
