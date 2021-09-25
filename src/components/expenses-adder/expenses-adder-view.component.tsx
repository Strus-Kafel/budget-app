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
                zIndex: 1,backgroundColor: "rgba(16,16,16,0.6)"
            }}
            ref={setRef}
            onClick={(e :any) => {
                if(e.target.id ==="expenses-adder-view"){
                setRef.current!.style.display = "none"
                }
            }}
        >
            {
                //TODO: add button to change display to none, setRef should works, see in component above,
                //add box width 80% and margin
                //main container in this component should have opacity
            }
            <Stack  
            id="expenses-form-box"
            style={{ margin: "10%", backgroundColor: "rgb(250, 228, 228)",
            height: "70%",padding: "2%",zIndex: 2, borderRadius: "10px" }}> 
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel >Wydatek</InputLabel>
                <Select
                    id="demo-simple-select"
                    value={typeOfExpense}
                    label="Age"
                    onChange={(e: any) => { setTypeOfExpense(e.target.value) }}
                >
                    <MenuItem >Wydatek</MenuItem>
                    <MenuItem >Przychód</MenuItem>
                </Select>

                <TextField label={'Wartość'} ref={textFieldRef} />
                {
                }
                        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="filled"
        />
                <Button
                variant="contained"
                    onClick={() => {
                        setRef.current!.style.display = "none"
                        addExpense(getAuthKey(), textFieldRef.current?.value);
                    }}
                >
                    Dodaj
                </Button>
            </FormControl >
            </Stack>
        </Stack>
    );
};
