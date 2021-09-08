import getMonthData from '../../fetches'

import {Box,Button} from '@material-ui/core/';

import {useSelector} from 'react-redux';

import {ChangeMonthPanel} from './change-month.component'

import {DayTile} from './day-tile.component'

const Calendar = () =>{
    const monthData = useSelector((state : any) => state.monthData)
    return(
    <Box id="calendar-container">
        <ChangeMonthPanel />
        <Box>
            <p>pon</p>
            <p>wt</p>
            <p>śr</p>
            <p>czw</p>
            <p>pią</p>
            <p>sob</p>
            <p>niedz</p>
            
        </Box>
        {

            //tu trzeba wymyslic funkcje, zeby wrzucalo przed dni puste kafelki
            monthData.map((data: any)=>(
                <DayTile 
                data = {data}
                />
            ))
        }

    </Box>
    )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Calendar);

//add function to all date to get number of days in month
Date.prototype.monthDays= function(){
    var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
    return d.getDate();
}