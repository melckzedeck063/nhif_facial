import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
// import NavBar from '../navbar';
// import MainLayout from '../../hoc';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext, AuthProvider } from '../../context'
// import { signinUser } from '../../store/actions/user_actions'
import { useDispatch } from 'react-redux';
import image from '../../assets/images/NHIF_Official_Logo.png'
import { signInUser } from '../../store/actions/user_actions';

const schema = Yup.object ({
    username: Yup
        .string()
        .required("Please fill out username is required")
        .email()
        .trim(),
    password: Yup
        .string()
        .required("Please fill out password is required")
        .trim()
    
})


function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const context = useContext(AuthContext)
    // console.log(context)

    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid, isSubmitSuccessful } } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        shouldFocusError: true,
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        // navigate('/dashboard')
        // console.log(data)

        dispatch(signInUser(data));

        setTimeout(() => {
            const storage = sessionStorage.getItem('token');
            const user = JSON.parse(storage);
            console.log(user)
            if (user.token !== null && user.token !== undefined && user.token !== "") {
                navigate('/dashboard', {role : "ADMIN"})
            }
            // else if (roles.includes("SELLER" && !"ADMIN")) {
            //     navigate('/dashboard', {role : "SELLER"})
            // }
            // else {
            //     console.log("is customer")
            //     navigate('/my_orders', {role : "CUSTOMER"})
            // }
        }, 2500);
        userLogin()
    }

    const userLogin = () => {
        context.handleLogin()
    }
    // console.log(errors)
    
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                username: "",
                password : ""
            })
        }
    })
    return (
      <>
       {/* <AuthProvider> */}
          {/* <MainLayout> */}
          {/* <NavBar /> */}
              <div className=" bg-slate-50 py-20 md:py-20 lg:py-20 xl:py-20">
                  
                        <div className="w-5/12 lg:w-6/12 xsm:w-11/12 sm:w-9/12 md:w-8/12 mx-auto">
                            <div className="bg-white rounded-md shadow-md hover:shadow-xl"> 
                            <div className="w-32 h-32 mx-auto">
                                 <img src={image} alt="" className='h-32 w-32' />
                            </div>                              
                        <form  onSubmit={handleSubmit(onSubmit)} className="mx-auto py-4 px-6 xsm:px-1 sm:px-2 text-slate-800">
                                    <div className="text-center">
                                        <h4 className="text-4xl font-bold text-sky-600 py-3">Sign In</h4>
                                    </div>  
                                    <div className="mb-1 pb-3 w-9/12 mx-auto">
                                        <label htmlFor="Username" className="font-medium text-sky-600">Username</label> <br />
                                        <input type="email" placeholder='Enter username' className={`rounded-md focus:outline-none bg-transparent border-2 px-2 py-2 ${errors.username? "border-red-500" : "border-sky-500"} w-full `}
                                            defaultValue={""}
                                            {...register("username")}
                                        />
                                        <span className="text-sm text-red-500"> {errors.username?.message} </span>
                                    </div>
                                    <div className="mb-1 pb-3 w-9/12 mx-auto">
                                        <label htmlFor="Username" className="font-medium text-sky-600">Password</label> <br />
                                        <input type="password" placeholder='Enter password' className={`rounded-md focus:outline-none bg-transparent border-2 px-2 py-2 ${errors.password? "border-red-500" : "border-sky-500"} w-full `}
                                            defaultValue={""}
                                            {...register("password")}
                                        />
                                        <span className="text-sm text-red-500"> {errors.password?.message} </span>
                                    </div>
                                    <div className="mt-2 pb-1 w-full text-center mx-auto">
                                  <button type="submit" disabled={!isValid || !isDirty } className="rounded-sm py-1 px-4 text-slate-50 bg-sky-600 hover:shadow-xl font-medium w-9/12 mx-auto">Login</button>
                                </div>
                           </form>
                                <div className="mx-auto w-10/12">
                                    {/* <div className=" rounded hover: bg-slate-700 text-white">                                        */}
                                    <p onClick={() => navigate('/forget') } className="font-medium animate-pulse cursor-pointer text-sky-600 mb-4 text-center"> Forget your password? </p>
                                    {/* </div> */}
                                    <p  className="text-slate-500 text-center mb-2">Don't have an account ?</p>
                                
                                    <div className="w-5/12  md:w-5/12 lg:w-5/12 xl:w-5/12 mx-auto mb-4 pb-8 xl:pl-6 lg:pl-6 md:pl-4">       
                                    <button onClick={() => navigate('/register')} className="rounded-md text-center border-2 border-sky-600 hover:bg-sky-600 hover:shadow-xl hover:text-white font-medium shadow-m px-4 py-1">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
       {/* </MainLayout> */}
    {/* </AuthProvider> */}
      </>
  )
}

export default Login