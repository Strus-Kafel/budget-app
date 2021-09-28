// import {encrypt} from '../../crypt';

import {login} from '../../fetches'

import {useRef} from 'react'

import {Box,TextField,Button} from '@mui/material'

//TODO: login with google OAuth2, maybe later
export const Login = () =>{
    const authKey = useSelector((state: any) => state.authKey)
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    return(
    <Box id="login-container">
        <TextField 
        ref= {loginRef}
        required
        />
        <TextField 
        ref={passwordRef}
        required
        />
        <Button
        variant = 'contained'
        onClick = {() =>{
            login(loginRef.current?.value,passwordRef.current?.value,authKey)
        }}
        />
    </Box>
    )
}