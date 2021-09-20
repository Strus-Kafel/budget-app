export async function getMonthData(authKey: any, month: number) {
  //return await fetch('loclahost:5000/....')

  //TODO: replace mock with real data
  const mockData = [
    {
      incomes: [
        {
          amount: 12.5,
          from: "janon bogdanon",
          description: "za dobre oceny ",
        },
      ],
      expenses: [
        {
          amount: 10,
          to: "Robert",
          description: "na dobry poslizg xd",
        },
      ],
    },
    {
      incomes: [
        {
          amount: 13,
          from: "piotr",
          description: "netflix",
        },
      ],
      expenses: [
        {
          amount: 13,
          to: "piotr",
          description: "netflix",
        },
        {
          amount: 12.5,
          to: "bobrowniki śląskie",
          description: "za wycieczki i nie tylko",
        },
      ],
    },
    { incomes: [], expenses: [] },
    { incomes: [], expenses: [] },
    { incomes: [], expenses: [] },
    { incomes: [], expenses: [] },
  ];

  return mockData;
}
export async function getMonthExpectations(authKey: any, month: number) {
  //TODO: replace mock with real data
  const mockData = {
    incomes: 2300,
    expenses: 2100,
  };
  return mockData;
}
export async function addExpense(authKey: any, expense: any) {
  //return await fetch(....),{
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     credentials: 'include',
  //     body: JSON.stringify({
  //         authKey: authKey,
  //         expense: expense
  //     })
  // }
  return null;
}
export async function addIncome(authKey: any, income: any) {
  //return await fetch(....),{
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     credentials: 'include',
  //     body: JSON.stringify({
  //         authKey: authKey,
  //         income: income
  //     })
  // }
  return null;
}
export async function login(login: string, password: any) {
  //return await fetch(....),{
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     credentials: 'include',
  //     body: JSON.stringify({
  //         login: login
  //         password:password
  //     })
  // }
  return null;
}
export async function getAuthKey() {
  //return await fetch('...')
  return "key";
}
