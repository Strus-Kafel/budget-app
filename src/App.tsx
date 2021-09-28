import './App.css';

import {Box} from '@mui/material';

import {Summary} from './components/summary/summary-container.component';
import {Navbar} from './components/navbar/navbar-container.component';
import Calendar from './components/calendar/calendar-container.component';
import {ExpensesAdder} from './components/expenses-adder/expenses-adder.component';

import { mapStateToProps, mapDispatchToProps } from './redux-store/opeartions';
import { connect } from "react-redux";

import {useEffect} from 'react'

import {getAuthKey} from './fetches'


function App({setAuthKey} :any) :FC {
  useEffect(()=>{
    //tu bedzie jakis await pewnie
    setAuthKey(getAuthKey())
  },[]) //a tu wywali blad i trzeba eslita dodac
  return (
    <Box 
    style={{width :"100vw",height:"100vh",display:"grid",placeItems:"center"}}
    className="App"
    >
      <Navbar />
      <ExpensesAdder />
      <Calendar />
      <Summary />
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
