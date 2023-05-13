import React, { useEffect, useState } from 'react'
// import NavBar from '../navbar'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { signupUser } from '../../store/actions/user_actions';
import image from '../../assets/images/NHIF_Official_Logo.png'
import { getUserById, signUpUser, updateUser } from '../../store/actions/user_actions';
import SideNav from '../sideBar/sideNav';
import NavBar from '../containers/header';

const schema = Yup.object({
    firstName: Yup
    .string()
    .required()
    .trim(),
    // middleName: Yup
    // .string()
    // .required()
    // .trim(),
    lastName: Yup
    .string()
    .required()
    .trim(),
    gender: Yup
    .string()
    .required()
    .trim(),
    dob: Yup
    .string()
    .required()
    .trim(),
    telephone : Yup
    .string()
    .required()
    .trim(),
    email: Yup
    .string()
    .required()
    .email()
    .trim(),
    // password: Yup
    // .string()
    // .required()
    // .min(8)
    // .trim(),
    // confirmPassword : Yup
    // .string()
    // .required()
    // .min(8)
    // .oneOf([Yup.ref("password")], "Passwords do not match")
    // .trim()
})

function UpdateUser() {

    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const params =  useParams();
    const [reload, setaReload] =  useState(0);

    const user =  useSelector(state =>state.users);
    // console.log(user.current_user);

    setTimeout(() => {
        if(reload < 5){
            setaReload(reload  => reload + 1)
        }
    }, 1000);


    useEffect(() => {
        if(user && user.current_user === null && reload <  3){
            dispatch( getUserById(params.id) )
        }
    })

    const { register, handleSubmit, reset, formState : {errors, isValid, isDirty, isSubmitSuccessful} } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        resolver : yupResolver(schema)
    })

    const onSubmit = data => {
        data.id = user?.current_user?.data?.data._id
        // console.log(data)
        dispatch( updateUser(data) );

        setTimeout(() => {
            window.location.reload(false);
        }, 2000);
    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                firstName: '',
                // middleName: '',
                lastName: '',
                dob: '',
                telephone: '',
                email: '',
                role: '',
                gender : ''
            })
        }
    })
  return (
      <>
          <div className='flex w-full'>
          <SideNav />
       <div className='w-full bg-white'>
          <NavBar />
              {/* <NavBar /> */}
              <div className="bg-slate-50 py-10">
                  <div className="mx-auto w-11/12 lg:w-6/12 xl:w-6/12">
                      <div className="rounded-md shadow bg-white w-full">

                        {
                            user?.current_user?.data?.data?(
                                <>
                                <div className="w-32 h-32 mx-auto">
                                 <img src={image} alt="" className='h-32 w-32' />
                            </div>               
                          <div className="p-2">
                              <p className="text-center text-3xl font-bold mb-4 text-sky-600">Update Profile</p>
                              <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-1">
                            <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                      <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Firstname" className='text-sky-600'>Firstname</label> <br />
                                          <input type="text" placeholder='Firstname'
                                           className={`rounded-md w-11/12 border-2 capitalize focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${ errors.firstName? "border-red-500" : "border-sky-500" }  `}
                                           defaultValue={user.current_user.data.data.firstName}
                                           {...register("firstName")}
                                     />
                                          <span className="text-red-500 text-sm">{ errors.firstName?.message }</span>
                                </div>
                                <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                              <label htmlFor="Lastname" className='text-sky-600'>Lastname</label> <br />
                                    <input type="text" placeholder='Lastname'
                                     className={`rounded-md w-11/12 border-2 capitalize focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.lastName? "border-red-500" : "border-sky-500"} `}
                                     defaultValue={user.current_user.data.data.lastName}
                                     {...register("lastName")}
                               />
                                    <span className="text-red-500 text-sm">{ errors.lastName?.message }</span>
                          </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">

                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                              <label htmlFor="Lastname" className='text-sky-600'>Date of Birth</label> <br />
                                    <input type="text" placeholder='date of birth' 
                                     className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.dob? "border-red-500" : "border-sky-500"} `}
                                     defaultValue={user.current_user.data.data.dob}
                                     {...register("dob")}
                               />
                                    <span className="text-red-500 text-sm">{ errors.dob?.message }</span>
                          </div>

                          <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Telephone" className='text-sky-600'>Gender</label> <br />
                                          <input type="tel" placeholder='gender'
                                           className={`rounded-md w-11/12 border-2 capitalize focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.gender?"border-red-500" : "border-sky-500"}`}
                                           defaultValue={user.current_user.data.data.gender}
                                           {...register("gender")}
                                     />
                                          <span className="text-red-500 text-sm">{ errors.telephone?.message }</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                      <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Telephone" className='text-sky-600'>Telephone</label> <br />
                                          <input type="tel" placeholder='Telephone'
                                           className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.telephone?"border-red-500" : "border-sky-500"}`}
                                           defaultValue={user.current_user.data.data.telephone}
                                           {...register("telephone")}
                                     />
                                          <span className="text-red-500 text-sm">{ errors.telephone?.message }</span>
                                </div>
                                <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Email Address" className='text-sky-600'>Email Address</label> <br />
                                    <input type="text" placeholder='Email Address' 
                                              className={`rounded-md border-2 w-11/12 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.email?"border-red-500" : "border-sky-500"} `}
                                     defaultValue={user.current_user.data.data.email}
                                     {...register("email")}
                                    />
                                    <span className="text-red-500 text-sm">{ errors.email?.message }</span>
                                </div>
                            </div>
                            {/* <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                      <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Password" className='text-sky-600'>Password</label> <br />
                                          <input type="password" placeholder='Password'
                                           className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.password?"border-red-500" : "border-sky-500"} `}
                                           defaultValue={""}
                                           {...register("password")}
                                     />
                                          <span className="text-red-500 text-sm">{ errors.password?.message }</span>
                                </div>
                                <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Confirm Password" className='text-sky-600'>Confirm Password</label> <br />
                                    <input type="password" placeholder='Confirm Password' 
                                              className={`rounded-md border-2 w-11/12  focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.confirmPassword?"border-red-500" : "border-sky-500"} `}
                                     defaultValue={""}
                                     {...register("confirmPassword")}
                                    />
                                    <span className="text-red-500 text-sm">{ errors.confirmPassword?.message }</span>
                                </div>
                            </div> */}
                            <div className="mx-auto w-9/12 py-4">            
                                  <button disabled={!isValid || !isDirty} style={{ width: '80%'}} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium">Submit</button>
                            </div>
                            
                              </form>
                          </div>
                                </>
                            )
                            : 
                            <>
                            <div className="py-3 text-lg  text-blue-500 text-center animate-pulse"> Loading </div>
                            </>
                        }
                      
                      </div>
                  </div>
              </div>
              </div>
        </div>
      </>
  )
}

export default UpdateUser