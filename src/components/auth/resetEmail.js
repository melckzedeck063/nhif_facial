import React, {useEffect} from 'react'
// import NavBar from '../navbar'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import NavBar from '../containers/header';

const schema = Yup.object ({
    username: Yup
        .string()
        .required("Please fill out username is required")
        .email()
        .trim(),
    
})


function ResetEmail() {

    // const dispatch = useDispatch();
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid, isSubmitSuccessful } } = useForm({
        mode: "all",
        reValidateMode: "onChange",
        shouldFocusError: true,
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        console.log(data)
        // dispatch(signinUser(data))
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                username: "",
                
            })
        }
    })


  return (
      <>
          <div className="">
              {/* <NavBar /> */}
              <NavBar />
              
              <div className=" bg-slate-50 py-20 md:py-20 lg:py-20 xl:py-20">
                  
                        <div className="w-5/12 lg:w-6/12 xsm:w-11/12 sm:w-9/12 md:w-8/12 mx-auto">
                            <div className="bg-white rounded-md shadow-md hover:shadow-xl">                               
                        <form  onSubmit={handleSubmit(onSubmit)} className="mx-auto py-4 px-6 xsm:px-1 sm:px-2 text-slate-800">
                                    <div className="text-center">
                                        <h4 className="text-4xl font-bold text-slate-600 py-3">Reset Password</h4>
                                        
                                    </div>  
                                    <div className="mb-1 pb-3 w-9/12 mx-auto">
                                        <label htmlFor="Username" className="font-medium">Username</label> <br />
                                        <input type="email" placeholder='Enter username' className={`rounded-md focus:outline-none bg-transparent border-2 px-2 py-2 ${errors.username? "border-red-500" : "border-slate-800"} w-full `}
                                            defaultValue={""}
                                            {...register("username")}
                                        />
                                        <span className="text-sm text-red-500"> {errors.username?.message} </span>
                                    </div>
                                   
                                    <div className="mt-2 pb-1 w-full text-center mx-auto">
                                  <button type="submit" disabled={!isValid || !isDirty } className="rounded-sm py-1 px-4 text-slate-50 bg-slate-800/95 hover:shadow-xl font-medium w-9/12 mx-auto">Submit</button>
                                </div>
                                <div className="mx-auto w-11/12">   
                                          <p onClick={() => navigate('/reset') } className="animate-pulse text-sm text-slate-700 m-2 text-center"> Reset link will be sent to the email you submitted shortly</p>                                  
                                    
                                </div>
                           </form>
                               
                            </div>
                        </div>
                  </div>
         </div>
      </>
  )
}

export default ResetEmail