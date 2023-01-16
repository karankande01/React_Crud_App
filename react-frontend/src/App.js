import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import EditEmployeeComponent from './components/EditEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path='/' exact element={ <ListEmployeeComponent/> }></Route>
            <Route path='/employees' element={ <ListEmployeeComponent/> }></Route>
            <Route path='/add-employee' element= { <CreateEmployeeComponent/> }></Route>
            <Route path='/view-employee/:id' element= { <ViewEmployeeComponent/> }></Route>
            <Route path='/edit-employee/:id' element= { <EditEmployeeComponent/> }></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
