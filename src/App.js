import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './components/auth';
import SignupUser from './components/auth/signup';
import ResetEmail from './components/auth/resetEmail';
import ResetPassword from './components/auth/resetPassword';
import Dashboard from './components/admin';
import AllRequests from './components/admin/all_requests';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route  path='/' element={ <Login  /> } />
             <Route  path='/register' element={ <SignupUser /> } />
             <Route path='/forget' element={ <ResetEmail /> } />
             <Route path='/reset' element={ <ResetPassword /> } />
             <Route path='/dashboard' element={ <Dashboard/> } />
             <Route path='/requests' element={ <AllRequests /> } />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
