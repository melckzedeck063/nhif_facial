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
import { sendRequest } from '../../store/actions/request_actions'
import moment from 'moment';
import Loader from './component/loader/loader';

const schema = Yup.object({
    username: Yup
        .string()
        .required()
        .trim(),
    surname: Yup
        .string()
        .required()
        .trim(),
    cardnumber: Yup
        .string()
        .required()
        .trim(),
    card_type: Yup
        .string()
        .required()
        .trim(),
    nationality: Yup
        .string()
        .required()
        .trim(),
    region: Yup
        .string()
        .required()
        .trim(),
    check_no: Yup
        .string()
        .required()
        .trim(),
    nida_no: Yup
        .string()
        .required()
        .min(16)
        .trim(),
    gender: Yup
        .string()
        .required()
        .trim(),
    dob: Yup
        .string()
        .required()
        .trim(),
    telephone: Yup
        .string()
        .required()
        .trim(),
    email: Yup
        .string()
        .required()
        .email()
        .trim(),
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

    const profile = useSelector(state => state.users);
    // console.log(profile.user_profile);

    useEffect(() => {
        if (profile && profile.user_profile === null && reload < 3) {
            dispatch(myProfile())
        }
    })

    const handlePartOne = () => {
        setPartOne(true);
        setPartTwo(false);
        // setPartThree(false);
        console.log('part One')
    }

    const handlePartTwo = () => {
        setPartOne(false);
        setPartTwo(true);
        // setPartThree(false);
        console.log('part two')
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
                username: '',
                // middleName: '',
                cardnumber: '',
                dob: '',
                telephone: '',
                email: '',
                password: '',
                confirmPassword: '',
                card_type: ''

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
                                        {
                                            profile?.user_profile?.data?.data ? (
                                                <>
                                                    {
                                                        partOne && (
                                                            <div className={``}>
                                                                <div className="text-center font-bold py-3 text-sky-500 sm:text-sm border-bb mb-2 border-slate-300 xsm:text-sm text-lg"><span className='headline-m'>Card Verification</span></div>
                                                                <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="username" className='text-sky-600'>Username</label> <br />
                                                                        <input type="text" placeholder='username'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.username ? "border-red-500" : "border-sky-500"}  `}
                                                                            defaultValue={profile.user_profile.data.data.username}
                                                                            {...register("username")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.username?.message}</span>
                                                                    </div>
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="cardnumber" className='text-sky-600'>Card Number</label> <br />
                                                                        <input type="text" placeholder='cardnumber'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.cardnumber ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={profile.user_profile.data.data.cardnumber}
                                                                            {...register("cardnumber")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.cardnumber?.message}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="mx-auto w-9/12 py-4">
                                                                    <button type='button' onClick={handlePartTwo} style={{ width: '80%' }} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium" /*disabled={!isValid || !isDirty}*/>Verify</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </>
                                            )
                                                :
                                                <>
                                                    <div className="text-lg text-sky-600 text-center font-medium animate-pulse"><Loader/></div>
                                                </>
                                        }
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
                                                                <p>{"9012-90-xxxxxxx"}</p>
                                                            </div>
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto pt-center">
                                                                <label htmlFor="cardnumber" className='text-sky-600 headline-m'>Identity ( id )</label> <br />
                                                                <p>{"9012-90-xxxxxxx"}</p>
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