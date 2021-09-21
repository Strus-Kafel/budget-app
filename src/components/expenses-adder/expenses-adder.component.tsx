import { useRef } from "react";
import { Button, Stack, TextField } from '@mui/material';

import { addExpense, getAuthKey } from '../../fetches';

import {ExpensesAdderView} from './expenses-adder-view.component';

export const ExpensesAdder = () => {
  const expensesAdderViewRef = useRef<HTMLDivElement>(null);
  return (
   
    <Stack direction="row" id="expenses-adder">
      <ExpensesAdderView  setRef={expensesAdderViewRef}/>
      {/* <TextField ref={textFielRef} label={"wydatki"} /> */}
      {
        /*TODO:
          add this in other view or something, to add description expenses/indomes options etc.

        */
      }
      <Button
        onClick={() => {
          console.log(expensesAdderViewRef.current!.style.display = "block")
          //addExpense(getAuthKey(), textFieldRef.current?.value);
        }}
      >
        Dodaj
      </Button>
    </Stack>
  );
};
