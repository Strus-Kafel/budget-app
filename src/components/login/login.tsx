import encrypt from '../../crypt';

import login from '../../fetches'

import {useRef} from 'react'

import {Box,TextField,Button} from '@material-ui/core/'

//tu trzeba ogarnac logowanie z google outah2
export const Login = () =>{
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    return(
    <Box id="expenses-adder">
        <TextField 
        reef= {loginRef}
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