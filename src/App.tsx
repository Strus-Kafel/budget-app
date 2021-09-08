import './App.css';

import {Box} from '@material-ui/core/';

import {Summary} from './components/summary/summary-container.component';
import {Navbar} from './components/navbar/navbar-container.component';
import {Calendar} from './components/calendar/calendar-container.component';

import { mapStateToProps, mapDispatchToProps } from './redux-store/operations';
import { connect, useSelector } from "react-redux";



function App() {
  return (
    <Box 
    style={{width :"100vw",height:"100vh"}}
    className="App"
    >
      <Summary />
      <Navbar />
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
