import {useSelector} from 'react-redux';

export const Calendar = () =>{
    const date = useSelector((state :any) => state.date)
    const monthDays = date.monthDays()

    return(
    <div id="calendar-container">
        
    </div>
    )
}


//add function to all date to get number of days in month
Date.prototype.monthDays= function(){
    var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
    return d.getDate();
}