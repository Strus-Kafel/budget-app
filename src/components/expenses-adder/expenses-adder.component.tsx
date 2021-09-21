import { useRef } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

import { addExpense, getAuthKey } from "../../fetches";

export const ExpensesAdder = () => {
  const textFielRef = useRef<HTMLInputElement>(null);
  return (
    <Stack direction="row" id="expenses-adder">
      <TextField ref={textFielRef} label={"wydatki"} />
      <Button
        onClick={() => {
          addExpense(getAuthKey(), textFielRef.current);
        }}
      >
        Dodaj
      </Button>
    </Stack>
  );
};
