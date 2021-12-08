import React from "react";
import Lists from './pages/Lists'
import AddList from './pages/AddList'
import GlobalStyled from './styled/GlobalStyled'
import {
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <GlobalStyled/>
      <Routes>
        <Route path="/" element={<Lists/>}> </Route>
        <Route path="/addlist" element={<AddList/>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
