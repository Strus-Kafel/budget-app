import './App.css';

import {Box} from '@material-ui/core/';

import {Summary} from './components/summary/summary-container'



function App() {
  return (
    <Box 
    style={{width :"100vw",height:"100vh"}}
    className="App"
    >
      <Summary />
    </Box>
  );
}

export default App;
