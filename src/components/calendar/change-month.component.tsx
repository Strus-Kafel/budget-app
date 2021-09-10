import {Box,Button} from '@material-ui/core/';


import { mapStateToProps, mapDispatchToProps } from './redux-store/operations';
import { connect, useSelector } from "react-redux";

import {getMonthData} from '../../fetches'

const ChangeMonthPanel =({setDate,setMonthData} :any) =>{
     const date = useSelector((state :any) => state.date)
     return(
<Box id="change-month-panel">
<Button
variant="contained"
onClick={
    async ()=>{
        setDate(date.setMonth(date.getMonth() -1))
        let data = await getMonthData(date.getMonth()+1)
        setMonthData(data)
    }
}
>{'<<<'}</Button>
<p>{date.getMonth()+1+'/'+date.getFullYear()}</p>
<Button
variant="contained"
onClick={
    async ()=>{
        setDate(date.setMonth(date.getMonth() +1))
        let data = await getMonthData(date.getMonth()+1)
        setMonthData(data)
    }
}
>{'>>>'}</Button>
</Box>
     )
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangeMonthPanel);