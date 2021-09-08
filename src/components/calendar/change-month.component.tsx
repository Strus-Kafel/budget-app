import {Box,Button} from '@material-ui/core/';

export const ChangeMonthPanel =() =>(
<Box id="change-month-panel">
<Button
variant="contained"
onClick={
    ()=>{}
}
></Button>
<p>{date.getMonth()+1+'/'+date.getFullYear()}</p>
<Button
variant="contained"
onClick={
    ()=>{}
}
></Button>
</Box>
    )