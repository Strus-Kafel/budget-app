import './App.css';

import {Box} from '@mui/material';

import {Summary} from './components/summary/summary-container.component';
import {Navbar} from './components/navbar/navbar-container.component';
import Calendar from './components/calendar/calendar-container.component';

import { mapStateToProps, mapDispatchToProps } from './redux-store/opeartions';
import { connect, useSelector } from "react-redux";

import {useEffect} from 'react'

import {getAuthKey} from './fetches'


//TODO write this function 
function setAuthKey(arg:any) {
  return null;
}


function App() {
  useEffect(()=>{
    //tu bedzie jakis await pewnie
    setAuthKey(getAuthKey())
  },[]) //a tu wywali blad i trzeba eslita dodac
  return (
    <Box 
    style={{width :"100vw",height:"100vh"}}
    className="App"
    >
      <Navbar />
      <Calendar />
      <Summary />
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
