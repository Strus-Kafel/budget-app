
import './navbar.css';
import { useRef } from 'react';

import { Box, Button } from "@mui/material";


export const Navbar = () => {
    const navbarRef = useRef<HTMLDivElement>()
    const navbarElements = useRef<HTMLDivElement>()
    return (
        <Box
            id="navbar-container"
            style={{ position: "absolute", top: "0", left: "0" }}
            ref={navbarRef}
        >
            <Button
                className="icon"
                onClick={() => {
                    //here add reverse animation
                    if (typeof navbarRef?.current !== undefined) {
                        navbarRef.current?.classList.add('slideAnim');
                        setTimeout(()=>{navbarElements.current!.style.display = 'block'}, 1500);
                    }

                }}
            >
                <i
                    className="fa fa-bars" style={{ fontSize: "25px", color: "violet" }} ></i>
            </Button>
            <Box
                id="navbar-elements"
                ref={navbarElements}
            >
                <Button>Element</Button>
            </Box>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        </Box>
    )
}