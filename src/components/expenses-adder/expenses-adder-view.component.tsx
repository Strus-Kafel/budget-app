import { useRef, useState } from 'react';
import { Button, Stack, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { addExpense, getAuthKey } from "../../fetches";

export const ExpensesAdderView = ({ setRef }: any) => {
    const textFieldRef = useRef<HTMLInputElement>(null);
    const [typeOfExpense, setTypeOfExpense] = useState<String>("wydatek");
    return (
        <Stack direction="row" id="expenses-adder-view" display="none"
            style={{
                width: '100vw', height: "100vh", position: "absolute", top: "0", left: "0",
                zIndex: 1, backgroundColor: "rgb(250, 228, 228)"
            }}
            ref={setRef}
        >
            {
                //TODO: add button to change display to none, setRef should works, see in component above,
                //add box width 80% and margin
                //main container in this component should have opacity
            }
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label" >Wydatek</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeOfExpense}
                    label="Age"
                    onChange={(e: any) => { setTypeOfExpense(e.target.value) }}
                >
                    <MenuItem >Wydatek</MenuItem>
                    <MenuItem >Przychód</MenuItem>
                </Select>
            </FormControl >
            <TextField label={'Wartość'} ref={textFieldRef} />
            {
                /*TODO:
                  add this in other view or something, to add description expenses/indomes options etc.
        
                */
            }
            <Button
                onClick={() => {
                    addExpense(getAuthKey(), textFieldRef.current?.value);
                }}
            >
                Dodaj
            </Button>
            <Button
                onClick={() => {
                    setRef.current!.style.display = "none"
                }}
            >{'X'}</Button>
        </Stack>
    );
};
