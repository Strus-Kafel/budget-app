// import {encrypt} from '../../crypt';

import {login} from '../../fetches'

import {useRef} from 'react'

import {Box,TextField,Button} from '@mui/material'

//TODO: login with google OAuth2
export const Login = () =>{
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    return(
    <Box id="expenses-adder">
        <TextField 
        ref= {loginRef}
        />
        <TextField 
        ref={passwordRef}
        />
        <Button
        variant = 'contained'
        onClick = {() =>{
            login
        }}
        />
    </Box>
    )
}