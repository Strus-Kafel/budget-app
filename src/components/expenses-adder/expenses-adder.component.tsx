
import {useRef} from 'react'
import {Box,Button,TextField} from '@material-ui/core/';

import addExpense from '../../fecthes'

export const ExpensesAdder = () =>{
    const textFielRef = useRef<HTMLInputElement>(null)
    return(
    <Box id="expenses-adder">
        <TextField 
        ref = {textFielRef}
            label = {'wydatki'}
        />
        <Button
            label={'dodaj'}
            onClick = {()=>{
                addExpense(textFielRef.current)
            }}
        />
        )
    </Box>
    )
}