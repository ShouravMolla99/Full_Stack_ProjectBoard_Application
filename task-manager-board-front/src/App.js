import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          {/* <ProjectBoard></ProjectBoard> */}
          <Routes>
            <Route exact path='/' element={<ProjectBoard></ProjectBoard>}></Route>
            <Route exact path='/addprojecttask' element={<AddProjectTask></AddProjectTask>}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
