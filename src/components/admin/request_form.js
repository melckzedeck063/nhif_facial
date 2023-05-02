import React, { useEffect, useState } from 'react'
// import NavBar from '../navbar'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { signupUser } from '../../store/actions/user_actions';
import image from '../../assets/images/NHIF_Official_Logo.png'
import NavBar from '../containers/header';
import SideNav from '../sideBar/sideNav';

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
    card_type: Yup
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
})

function NewRequest() {

    const navigate = useNavigate();
    const [file, setFile] = useState("");
    // const dispatch =  useDispatch()

    const formData = new FormData();
    formData.append('file', file)

    const { register, handleSubmit, reset, formState : {errors, isValid, isDirty, isSubmitSuccessful} } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        resolver : yupResolver(schema)
    })

    const onSubmit = data => {
        console.log(data, formData, file)
        // dispatch( NewRequest(data) )
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
                password: '',
                confirmPassword : '',
                card_type : ''

            })
        }
    })
  return (
      <>
          <div className='flex w-full justify-between'>
            <SideNav />
          <div className='w-full'>
              <NavBar />
              <div className="bg-slate-50 py-10">
                  <div className="mx-auto w-11/12 lg:w-6/12 xl:w-6/12">
                      <div className="rounded-md shadow bg-white w-full">  
                            <div className="w-32 h-32 mx-auto">
                                 <img src={image} alt="" className='h-32 w-32' />
                            </div>             
                          <div className="p-2">
                              <p className="text-center text-3xl font-bold mb-4 text-sky-600">Request Card</p>
                              <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-1">
                            <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                      <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Firstname" className='text-sky-600'>Firstname</label> <br />
                                          <input type="text" placeholder='Firstname'
                                           className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${ errors.firstName? "border-red-500" : "border-sky-500" }  `}
                                           defaultValue={""}
                                           {...register("firstName")}
                                     />
                                          <span className="text-red-500 text-sm">{ errors.firstName?.message }</span>
                                </div>
                                <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                              <label htmlFor="Lastname" className='text-sky-600'>Lastname</label> <br />
                                    <input type="text" placeholder='Lastname'
                                     className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.lastName? "border-red-500" : "border-sky-500"} `}
                                     defaultValue={""}
                                     {...register("lastName")}
                               />
                                    <span className="text-red-500 text-sm">{ errors.lastName?.message }</span>
                          </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">

                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                              <label htmlFor="Lastname" className='text-sky-600'>Date of Birth</label> <br />
                                    <input type="date" 
                                     className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.dob? "border-red-500" : "border-sky-500"} `}
                                     defaultValue={""}
                                     {...register("dob")}
                               />
                                    <span className="text-red-500 text-sm">{ errors.dob?.message }</span>
                          </div>

                                <div className="mx-auto w-11/12 mb-1  ml-3">
                                    <label className='ml-2 text-sky-600' htmlFor="Gender">Gender </label> <br />
                                    <input className='ml-2' type="radio" checked  name='gender' value={"Male"} placeholder='gender' 
                                    //  defaultValue={""}
                                     {...register("gender")}
                                    /> Male
                                    <input type="radio"  name='gender' value={"Female"} placeholder='gender' 
                                    className='ml-3'
                                    //  defaultValue={""}
                                     {...register("gender")}
                                    /> Female <br />
                                     
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                      <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Telephone" className='text-sky-600'>Telephone</label> <br />
                                          <input type="tel" placeholder='Telephone'
                                           className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.telephone?"border-red-500" : "border-sky-500"}`}
                                           defaultValue={""}
                                           {...register("telephone")}
                                     />
                                          <span className="text-red-500 text-sm">{ errors.telephone?.message }</span>
                                </div>
                                <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                    <label htmlFor="Email Address" className='text-sky-600'>Email Address</label> <br />
                                    <input type="text" placeholder='Email Address' 
                                              className={`rounded-md border-2 w-11/12 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.email?"border-red-500" : "border-sky-500"} `}
                                     defaultValue={""}
                                     {...register("email")}
                                    />
                                    <span className="text-red-500 text-sm">{ errors.email?.message }</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                              <label htmlFor="Lastname" className='text-sky-600'>Card Type</label> <br />
                                    <select name="" id=""
                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.card_type? "border-red-500" : "border-sky-500"} `}
                                    defaultValue={""}
                                    {...register("card_type")}
                                    >
                                        <option value="">Select Card Type</option>
                                        <option value="Student card">Student Card</option>
                                        <option value="Children card">Children Card</option>
                                        <option value="Employee card">Employee Card</option>
                                    </select>
                                    <span className="text-red-500 text-sm">{ errors.card_type?.message }</span>
                          </div>
                          <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                              <label htmlFor="Lastname" className='text-sky-600'>Upload Photo</label> <br />
                                <input type="file" placeholder='Event date' 
                                          className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.lastName? "border-red-500" : "border-sky-500"} `}
                                          required
                                          onChange={(e) => setFile(e.target.files[0])}
                                    //  defaultValue={""}
                                    //  {...register("lastName")}
                                   />
                                    {/* <span className="text-red-500 text-sm">{ errors.lastName?.message }</span> */}
                          </div>
                            </div>
                            <div className="mx-auto w-9/12 py-4">            
                                  <button disabled={!isValid || !isDirty} style={{ width: '80%'}} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium">Submit</button>
                            </div>
                            
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
          </div>
      </>
  )
}

export default NewRequest