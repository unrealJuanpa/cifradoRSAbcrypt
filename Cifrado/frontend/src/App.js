import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompLoginForm from './login/CompLogin';
import CompDashboardMain from './dashboard/CompDashboard';
import CompCreateUsuarioForm from './usuarios/CompCreateUsuario';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompLoginForm/>}/>
          <Route path='/dashboard' element={<CompDashboardMain/>}/>
          <Route path='/create' element={<CompCreateUsuarioForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
