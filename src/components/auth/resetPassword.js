import React, {useEffect} from 'react'
// import NavBar from '../navbar'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
// import {useDispatch } from 'react-redux'

const schema = Yup.object ({
    password: Yup
    .string()
    .required()
    .min(8)
    .trim(),
    confirmPassword : Yup
    .string()
    .required()
    .min(8)
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .trim()
})


function ResetPassword() {

    // const dispatch = useDispatch()

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
                password: "",
                confirmPassword : ''
                
            })
        }
    })


  return (
      <>
          <div className="">
              {/* <NavBar /> */}
              
              <div className=" bg-slate-50 py-20 md:py-20 lg:py-20 xl:py-20">
                  
                        <div className="w-5/12 lg:w-6/12 xsm:w-11/12 sm:w-9/12 md:w-8/12 mx-auto">
                            <div className="bg-white rounded-md shadow-md hover:shadow-xl">                               
                        <form  onSubmit={handleSubmit(onSubmit)} className="mx-auto py-4 px-6 xsm:px-1 sm:px-2 text-slate-800">
                                    <div className="text-center">
                                        <h4 className="text-4xl font-bold text-slate-600 py-3">Reset Password</h4>
                                    </div>  
                                    <div className="mb-1 pb-3 w-9/12 mx-auto">
                                    <label htmlFor="Password">Password</label> <br />
                                          <input type="password" placeholder='Password'
                                           className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.password?"border-red-500" : "border-slate-800"} `}
                                           defaultValue={""}
                                           {...register("password")}
                                     />
                                          <span className="text-red-500 text-sm">{ errors.password?.message }</span>
                                    </div>
                                    
                                    <div className="mb-1 pb-3 w-9/12 mx-auto">
                                    <label htmlFor="Confirm Password">Confirm Password</label> <br />
                                    <input type="password" placeholder='Confirm Password' 
                                              className={`rounded-md border-2 w-11/12  focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.confirmPassword?"border-red-500" : "border-slate-800"} `}
                                     defaultValue={""}
                                     {...register("confirmPassword")}
                                    />
                                    <span className="text-red-500 text-sm">{ errors.confirmPassword?.message }</span>
                                    </div>
                                   
                                    <div className="mt-2 pb-1 w-full text-center mx-auto">
                                  <button type="submit" disabled={!isValid || !isDirty } className="rounded-sm py-1 px-4 text-slate-50 bg-slate-800/95 hover:shadow-xl font-medium w-9/12 mx-auto">Submit</button>
                                </div>
                           </form>
                              
                            </div>
                        </div>
                  </div>
         </div>
      </>
  )
}

export default ResetPassword