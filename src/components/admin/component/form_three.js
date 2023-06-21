import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SideNav from '../../sideBar/sideNav';
import NavBar from '../../containers/header';
import { useNavigate } from 'react-router';
import { registerDependant } from '../../../store/actions/dependant_action';
import { useDispatch } from 'react-redux';

const schema = Yup.object({
    firstName: Yup
    .string()
    .required()
    .trim(),
    surname: Yup
    .string()
    .required()
    .trim(),
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
    
})

export default function FormThree(){
    const dispatch = useDispatch();
    const [file,setFile] =  useState()
    const navigate =  useNavigate();

    const formData = new FormData();
    formData.append('file', file)

    const { register, handleSubmit, reset, formState : {errors, isValid, isDirty, isSubmitSuccessful} } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        resolver : yupResolver(schema)
    })

    const onSubmit = data => {
        // console.log(data, formData, file)
        dispatch( registerDependant(data) )

        setTimeout(() => {
            navigate('/dependant_4_form')
        }, 2000);
        
    }
    return(
        <div className="flex w-full">
            <SideNav />
            <div className="w-full">
                <NavBar />
                <div className="bg-slate-50 py-10">
                  <div className="mx-auto w-11/12 lg:w-8/12 xl:w-8/12">
                      <div className="rounded-md shadow  py-10 bg-white w-full">  

                        <div className="text-center font-bold text-sky-500 textlg sm:text-sm xsm:text-sm">Third Dependant Details</div>
                        <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-1">
             .    <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
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
                              <label htmlFor="Lastname" className='text-sky-600'>Surname</label> <br />
                                    <input type="text" placeholder='Surname' 
                                     className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.surname? "border-red-500" : "border-sky-500"} `}
                                     defaultValue={""}
                                     {...register("surname")}
                               />
                                    <span className="text-red-500 text-sm">{ errors.surname?.message }</span>
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
                              <label htmlFor="Lastname" className='text-sky-600'>Date of Birth</label> <br />
                                    <input type="date" 
                                     className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.dob? "border-red-500" : "border-sky-500"} `}
                                     defaultValue={""}
                                     {...register("dob")}
                               />
                                    <span className="text-red-500 text-sm">{ errors.dob?.message }</span>
                          </div>
                          <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                              <label htmlFor="Lastname" className='text-sky-600'>Upload Photo</label> <br />
                                <input type="file" placeholder='Event date' 
                                          className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.lastName? "border-red-500" : "border-sky-500"} `}
                                          required
                                          onChange={(e) => setFile(e.target.files[0])}
                                   />
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
                              <label htmlFor="Lastname" className='text-sky-600'>Relationship</label> <br />
                                    <select name="" id=""
                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.relation? "border-red-500" : "border-sky-500"} `}
                                    defaultValue={""}
                                    {...register("relation")}
                                    >
                                        <option value="">Select Relationship</option>
                                        <option value="Partner">Partner</option>
                                        <option value="Parent">Parent</option>
                                        <option value="Children">Children</option>
                                    </select>
                                    <span className="text-red-500 text-sm">{ errors.card_type?.message }</span>
                          </div>
                          </div>

                          <div className="mx-auto w-9/12 py-4">            
                                  <button type="submit" disabled={!isValid || !isDirty} style={{ width: '80%'}}  className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium">Submit</button>
                            </div>
                          </form >
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}