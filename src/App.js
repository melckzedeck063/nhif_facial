import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './components/auth';
import SignupUser from './components/auth/signup';
import ResetEmail from './components/auth/resetEmail';
import ResetPassword from './components/auth/resetPassword';
import Dashboard from './components/admin';
import AllRequests from './components/admin/all_requests';
import NewRequest from './components/admin/request_form';
import MyDependants from './components/admin/all_dependants';
import DependantRequest from './components/admin/dependant_request';
import PendingRequests from './components/admin/pending_request';
import AllStaffs from './components/admin/all_staff';
import AllCustomers from './components/admin/all_customers';

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
             <Route path='/pending_requests' element={ <PendingRequests/> } />
             <Route path='/new_request' element={ <NewRequest /> } />
             <Route path='/dependants' element={ <MyDependants /> } />
             <Route path='/new_dependant' element={ <DependantRequest /> } />
             <Route path='/staffs' element={ <AllStaffs /> } />
             <Route path='/customers' element={ <AllCustomers /> } />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
