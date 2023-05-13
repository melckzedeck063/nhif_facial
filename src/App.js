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
import { AuthProvider } from './context';
import ProtectedRoute from './context/protect'
import UpdateUser from './components/admin/editUser';
import FormOne from './components/admin/component/form_one';
import FormTwo from './components/admin/component/form_two';
import FormThree from './components/admin/component/form_three';
import FormFour from './components/admin/component/form_four';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <AuthProvider>
          <Routes>
             <Route  path='/' element={ <Login  /> } />
             <Route  path='/register' element={ <SignupUser /> } />
             <Route path='/forget' element={ <ResetEmail /> } />
             <Route path='/reset' element={ <ResetPassword /> } />
             <Route path='/dashboard' element={ <ProtectedRoute> <Dashboard/>  </ProtectedRoute> } />
             <Route path='/requests' element={ <ProtectedRoute>  <AllRequests /> </ProtectedRoute> } />
             <Route path='/pending_requests' element={ <ProtectedRoute>  <PendingRequests/>  </ProtectedRoute> } />
             <Route path='/new_request' element={ <ProtectedRoute> <NewRequest /> </ProtectedRoute> } />
             <Route path='/dependant_form' element={ <ProtectedRoute> <FormOne /> </ProtectedRoute> } />
             <Route path='/dependant_2_form' element={ <ProtectedRoute> <FormTwo /> </ProtectedRoute> } />
             <Route path='/dependant_3_form' element={ <ProtectedRoute> <FormThree /> </ProtectedRoute> } />
             <Route path='/dependant_4_form' element={ <ProtectedRoute> <FormFour /> </ProtectedRoute> } />
             <Route path='/dependants' element={ <ProtectedRoute>  <MyDependants />  </ProtectedRoute> } />
             <Route path='/new_dependant' element={ <ProtectedRoute>  <DependantRequest />  </ProtectedRoute>} />
             <Route path='/staffs' element={<ProtectedRoute>  <AllStaffs /> </ProtectedRoute> } />
             <Route path='/profile/:id' element={<ProtectedRoute>  <UpdateUser /> </ProtectedRoute> } />
             <Route path='/customers' element={ <ProtectedRoute>  <AllCustomers />  </ProtectedRoute>} />
          </Routes>
          </AuthProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
