import { configureStore } from '@reduxjs/toolkit';

import users from './reducers/user_reducer';
import request from './reducers/request_reducer';
import dependant from './reducers/dependant_reducer';

export default configureStore({

    reducer : {
        users,
        request,
        dependant
        
    }
})
