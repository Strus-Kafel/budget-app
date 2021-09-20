import { useRef } from "react";
import { Box, Button, TextField } from "@mui/material";

import { addExpense } from "../../fetches";

export const ExpensesAdder = () => {
  const authKey = "";
  const textFielRef = useRef<HTMLInputElement>(null);
  return (
    <Box id="expenses-adder">
      <TextField ref={textFielRef} label={"wydatki"} />
      <Button
        onClick={() => {
          addExpense(authKey, textFielRef.current);
        }}
      >
        Dodaj
      </Button>
    </Box>
  );
};
