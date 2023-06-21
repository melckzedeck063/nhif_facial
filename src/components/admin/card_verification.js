import React, { useEffect, useState } from 'react'
// import NavBar from '../navbar'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { signupUser } from '../../store/actions/user_actions';
import image from '../../assets/images/NHIF_Official_Logo.png'
import NavBar from '../containers/header';
import SideNav from '../sideBar/sideNav';
import FormTwo from './component/form_two';
import { myProfile } from '../../store/actions/user_actions';
import { checkUserExistance, sendRequest, verifyUser } from '../../store/actions/request_actions'
import moment from 'moment';
import Loader from './component/loader/loader';

const schema = Yup.object({
    
    surname: Yup
        .string()
        .required()
        .trim(),
    // cardnumber: Yup
    //     .string()
    //     .required()
    //     .trim(),
    // card_type: Yup
    //     .string()
    //     .required()
    //     .trim(),
    // nationality: Yup
    //     .string()
    //     .required()
    //     .trim(),
    // region: Yup
    //     .string()
    //     .required()
    //     .trim(),
    // check_no: Yup
    //     .string()
    //     .required()
    //     .trim(),
    // nida_no: Yup
    //     .string()
    //     .required()
    //     .min(16)
    //     .trim(),
    // gender: Yup
    //     .string()
    //     .required()
    //     .trim(),
    // dob: Yup
    //     .string()
    //     .required()
    //     .trim(),
    telephone: Yup
        .string()
        .required()
        .trim(),
    // email: Yup
    //     .string()
    //     .required()
    //     .email()
    //     .trim(),
})

function VerificationCard() {

    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const dispatch = useDispatch()
    const [reload, setReload] = useState(0);

    const [partOne, setPartOne] = useState(true);
    const [partTwo, setPartTwo] = useState(false);
    // const [partThree, setPartThree]  =  useState(false);


    setTimeout(() => {
        if (reload < 5) {
            setReload(reload => reload + 1);
        }
    }, 1000);



    const user_signal = useSelector(state => state.request);
    // console.log(user_signal.current_user);

    useEffect(() => {
        if (user_signal && user_signal.current_user === null && reload < 3) {
            dispatch(verifyUser())
        }
    })

    const verified_user = useSelector(state => state.request)
    console.log(verified_user.user)

    const handlePartOne = () => {
        setPartOne(true);
        setPartTwo(false);
        // setPartThree(false);
        console.log('part One')
    }

    const handlePartTwo = (id) => {
        dispatch(checkUserExistance(id))
        setTimeout(() => {
            setPartOne(false);
            setPartTwo(true);
            // setPartThree(false);
        }, 4000);

    }
    const backhome = () => {
        navigate('/dashboard');
    }

    const formData = new FormData();
    formData.append('file', file)

    const { register, handleSubmit, reset, formState: { errors, isValid, isDirty, isSubmitSuccessful } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        // console.log(data, formData, file)
        dispatch(sendRequest(data))

        setTimeout(() => {
            navigate('/dependant_form')
        }, 2000);
    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({

                cardnumber: '',
                dob: '',
                telephone: '',
                surname: ''


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
                        <div className="mx-auto w-11/12 lg:w-8/12 xl:w-8/12">
                            <div className="rounded-md shadow bg-white w-full border-btn">
                                <div className="w-32 h-32 mx-auto">
                                    <img src={image} alt="" className='h-32 w-32' />
                                </div>
                                <div className="p-2">
                                    {/* <p className="text-center text-3xl font-bold mb-4 text-sky-600">Request Card</p> */}
                                    <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-1">
                                        {/* PART_ONE   */}
                                        {/* {
                                            profile?.user_profile?.data?.data ? (
                                                <> */}

                                        {
                                            user_signal?.current_user?.data?.data[0] ? (
                                                <>
                                                    {
                                                        partOne && (
                                                            <div className={``}>
                                                                <div className="text-center font-bold py-3 text-sky-500 sm:text-sm border-bb mb-2 border-slate-300 xsm:text-sm text-lg"><span className='headline-m'>Card Verification</span></div>
                                                                <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Full Name" className='text-sky-600'>Full name</label> <br />
                                                                        <input type="text" placeholder='Full Name'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.fullName ? "border-red-500" : "border-sky-500"}  `}
                                                                            defaultValue={""}
                                                                            {...register("fullName")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.fullName?.message}</span>
                                                                    </div>
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="telephone" className='text-sky-600'>Phone Number</label> <br />
                                                                        <input type="text" placeholder='telephone'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.telephone ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={""}
                                                                            {...register("telephone")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.telephone?.message}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="mx-auto w-9/12 py-4">
                                                                    <button type='button' onClick={() => handlePartTwo(user_signal.current_user.data.data[0].photo_id)} style={{ width: '80%' }} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium" disabled={!isValid || !isDirty}>Verify</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </>
                                            )
                                                :
                                                <><Loader/></>
                                        }
                                        {/* )
                                                </>
                                           :
                                                <>
                                                    <div className="text-lg text-sky-600 text-center font-medium animate-pulse"><Loader/></div>
                                               </>
                                     } */}
                                        {/* END PART_ONE  */}

                                        {/* PART_TWO */}
                                        {
                                            partTwo && (
                                                <div className="">
                                                    <div className={``}>
                                                        <div className="text-center font-bold py-3 text-sky-500 sm:text-sm xsm:text-sm text-lg"><span className='headline-m'>CARD INFORMATION</span></div>

                                                        <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto pt-center">
                                                                <label htmlFor="username" className='text-sky-600 headline-m'>Card Number</label> <br />
                                                                <p>{verified_user.user.data.data[0].card_no}</p>
                                                            </div>
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto pt-center">
                                                                <label htmlFor="cardnumber" className='text-sky-600 headline-m'>Full Name</label> <br />
                                                                <p>{verified_user.user.data.data[0].user.firstName + ' '+ verified_user.user.data.data[0].user.middleName+ ' '+ verified_user.user.data.data[0].user.lastName}</p>
                                                                {}
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto pt-center">
                                                                <label htmlFor="username" className='text-sky-600 headline-m'>Card Number</label> <br />
                                                                <p>{verified_user.user.data.data[0].user.gender}</p>
                                                            </div>
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto pt-center">
                                                                <label htmlFor="cardnumber" className='text-sky-600 headline-m'>Identity ( id )</label> <br />
                                                                <p>{verified_user.user.data.data[0].user.dob}</p>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto pt-center">
                                                                <label htmlFor="username" className='text-sky-600 headline-m'>Card Number</label> <br />
                                                                <p>{verified_user.user.data.data[0].user.telephone}</p>
                                                            </div>
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto pt-center">
                                                                <label htmlFor="cardnumber" className='text-sky-600 headline-m'>Identity ( id )</label> <br />
                                                                <p>{verified_user.user.data.data[0].marital_status}</p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="mx-auto flex space-x-4 w-9/12 py-4">
                                                        <button type='button' onClick={handlePartOne} style={{ width: '80%' }} className="rounded shadow px-2 mx-auto py-1 bg-green-600 text-white font-medium">Previous</button>
                                                        <button type="click" style={{ width: '80%' }} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium" onClick={backhome}>Done</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {/* END PARTTWO  */}
                                        {/* <div className="mx-auto w-9/12 py-4">            
                                  <button type="submit" disabled={!isValid || !isDirty} style={{ width: '80%'}}  className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium">Submit</button>
                            </div> */}


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

export default VerificationCard