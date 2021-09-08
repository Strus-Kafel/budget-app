async function getMonthData(authKey :any){
    //return await fetch('loclahost:5000/....')

    //testowy mock

    return [
        {
            incomes : [
                {
                    amount : 12.50,
                    from : 'janon bogdanon',
                    description : 'za dobre oceny '
                }
            ],
            expenses : [
                {
                amount : 10,
                to : 'Robert',
                description: 'na dobry poslizg xd'
            }
        ]
        },
        {
            incomes : [
                {
                    amount : 13,
                    from : 'piotr',
                    description : 'netflix'
                }
            ],
            expenses : [
                {
                amount : 13,
                to : 'piotr',
                description: 'netflix'
            },
            {
                amount : 12.50,
                to : 'bobrowniki śląskie',
                description : 'za wycieczki i nie tylko'
            }
        ]
        },
        {incomes : [],expenses : []},
        {incomes : [],expenses : []},
        {incomes : [],expenses : []},
        {incomes : [],expenses : []},

    ]
}
async function getMonthExpectations(authKey :any, month){
    return {
        incomes : 2300,
        expenses: 2100
    }
}