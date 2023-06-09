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
import { getPhotoId, sendRequest } from '../../store/actions/request_actions'
import moment from 'moment';
import Loader from './component/loader/loader';

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

function NewRequest() {

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

    const new_signal = useSelector(state => state.request);

    // console.log(new_signal.user);


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
        dispatch(getPhotoId())
        // setPartThree(false);
        console.log('part two')
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

        if (new_signal && new_signal.user && new_signal.user.data && new_signal.user.data.data) {
            data.photo_id = new_signal.user.data.data[0].photo_id;
            data.username = new_signal.user.data.data[0].username
            // console.log(data, formData, file)
            dispatch(sendRequest(data))
        }

        // dispatch( getPhotoId())
        document.getElementById("form").style.display = "none";
        document.getElementById("loader").style.display = "block";

        setTimeout(() => {
            document.getElementById("form").style.display = "block";
            document.getElementById("loader").style.display = "none";
            navigate('/dependant_form')
        }, 5000);
    }


    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset({
            //     firstName: '',
            //     // middleName: '',
            //     lastName: '',
            //     dob: '',
            //     telephone: '',
            //     email: '',
            //     password: '',
            //     confirmPassword : '',
            //     card_type : ''

            // })
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
                            <div className="rounded-md shadow bg-white w-full">
                                <div className="w-32 h-32 mx-auto">
                                    <img src={image} alt="" className='h-32 w-32' />
                                </div>
                                <div className="p-2">
                                    <div id='loader' style={{ display: 'none' }}><Loader /></div>
                                    {/* <p className="text-center text-3xl font-bold mb-4 text-sky-600">Request Card</p> */}
                                    <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-1" id='form'>
                                        {/* PART_ONE   */}
                                        {
                                            profile?.user_profile?.data?.data ? (
                                                <>
                                                    {
                                                        partOne && (
                                                            <div className={``}>
                                                                <div className="text-center font-bold py-3 text-sky-500 sm:text-sm border-bb mb-2 border-slate-300 xsm:text-sm text-lg">Personal Details</div>
                                                                <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Firstname" className='text-sky-600'>Firstname</label> <br />
                                                                        <input type="text" placeholder='Firstname'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.firstName ? "border-red-500" : "border-sky-500"}  `}
                                                                            defaultValue={profile.user_profile.data.data.firstName}
                                                                            {...register("firstName")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.firstName?.message}</span>
                                                                    </div>
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Lastname" className='text-sky-600'>Lastname</label> <br />
                                                                        <input type="text" placeholder='Lastname'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.lastName ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={profile.user_profile.data.data.lastName}
                                                                            {...register("lastName")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.lastName?.message}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">

                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Lastname" className='text-sky-600'>Surname</label> <br />
                                                                        <input type="text" placeholder='Surname'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.surname ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={profile.user_profile.data.data.middleName}
                                                                            {...register("surname")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.surname?.message}</span>
                                                                    </div>

                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Lastname" className='text-sky-600'>Gender</label> <br />
                                                                        <input type="text" placeholder='gender'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.gender ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={profile.user_profile.data.data.gender}
                                                                            {...register("gender")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.surname?.message}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Lastname" className='text-sky-600'>Date of Birth</label> <br />
                                                                        <input type="text" placeholder='date of birth'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.dob ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={profile.user_profile.data.data.dob}
                                                                            {...register("dob")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.dob?.message}</span>
                                                                    </div>
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Email Address" className='text-sky-600'>Email Address</label> <br />
                                                                        <input type="text" placeholder='Email Address'
                                                                            className={`rounded-md border-2 w-11/12 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.email ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={profile.user_profile.data.data.email}
                                                                            {...register("email")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.email?.message}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Telephone" className='text-sky-600'>Telephone</label> <br />
                                                                        <input type="tel" placeholder='Telephone'
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.telephone ? "border-red-500" : "border-sky-500"}`}
                                                                            defaultValue={profile.user_profile.data.data.telephone}
                                                                            {...register("telephone")}
                                                                        />
                                                                        <span className="text-red-500 text-sm">{errors.telephone?.message}</span>
                                                                    </div>

                                                                    <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                        <label htmlFor="Lastname" className='text-sky-600'>Card Type</label> <br />
                                                                        <select name="" id=""
                                                                            className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.card_type ? "border-red-500" : "border-sky-500"} `}
                                                                            defaultValue={""}
                                                                            {...register("card_type")}
                                                                        >
                                                                            <option value="Employee card">Employee Card</option>
                                                                        </select>
                                                                        <span className="text-red-500 text-sm">{errors.card_type?.message}</span>
                                                                    </div>

                                                                </div>
                                                                <div className="mx-auto w-9/12 py-4">
                                                                    <button type='button' onClick={handlePartTwo} style={{ width: '80%' }} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium">Next</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </>
                                            )
                                                :
                                                <>
                                                    <div className="text-lg text-sky-600 text-center font-medium animate-pulse"><Loader /></div>
                                                </>
                                        }
                                        {/* END PART_ONE  */}

                                        {/* PART_TWO */}
                                        {
                                            partTwo && (
                                                <div className="">
                                                    <div className={``}>
                                                        <div className="text-center font-bold py-3 text-sky-500 sm:text-sm xsm:text-sm text-lg">Nationality</div>

                                                        <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="Firstname" className='text-sky-600'>Nationality</label> <br />
                                                                <input type="text" placeholder='nationality'
                                                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.nationality ? "border-red-500" : "border-sky-500"}  `}
                                                                    defaultValue={""}
                                                                    {...register("nationality")}
                                                                />
                                                                <span className="text-red-500 text-sm">{errors.nationality?.message}</span>
                                                            </div>
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="Lastname" className='text-sky-600'>Region</label> <br />
                                                                <select name="" id=""
                                                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.region ? "border-red-500" : "border-sky-500"} `}
                                                                    defaultValue={""}
                                                                    {...register("region")}
                                                                >
                                                                    <option value="">Select  Region</option>
                                                                    <option value="Dodoma">Dodoma</option>
                                                                    <option value="Arusha">Arusha</option>
                                                                    <option value="Dar es Salaam">Dar es Salaam</option>
                                                                    <option value="Mwanza">Mwanza</option>
                                                                </select>
                                                                <span className="text-red-500 text-sm">{errors.region?.message}</span>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="Firstname" className='text-sky-600'>Check No</label> <br />
                                                                <input type="text" placeholder='check_no'
                                                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.check_no ? "border-red-500" : "border-sky-500"}  `}
                                                                    defaultValue={""}
                                                                    {...register("check_no")}
                                                                />
                                                                <span className="text-red-500 text-sm">{errors.check_no?.message}</span>
                                                            </div>
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="Lastname" className='text-sky-600'>Nida No</label> <br />
                                                                <input type="text" placeholder='01011990-xxxxx-xxxxxx-xxx'
                                                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.nida_no ? "border-red-500" : "border-sky-500"} `}
                                                                    defaultValue={""}
                                                                    {...register("nida_no")}
                                                                />
                                                                <span className="text-red-500 text-sm">{errors.nida_no?.message}</span>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="Firstname" className='text-sky-600'>Marital Status</label> <br />
                                                                <select name="" id=""
                                                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.marital_status ? "border-red-500" : "border-sky-500"}  `}
                                                                    defaultValue={""}
                                                                    {...register("marital_status")}
                                                                >
                                                                    <option value="">Select Marital Status</option>
                                                                    <option value="single">Single</option>
                                                                    <option value="married">Married</option>
                                                                </select>
                                                                <span className="text-red-500 text-sm">{errors.marital_status?.message}</span>
                                                            </div>
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="Lastname" className='text-sky-600'>Upload Photo</label> <br />
                                                                <input type="file" placeholder='Event date'
                                                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.lastName ? "border-red-500" : "border-sky-500"} `}
                                                                    required
                                                                    onChange={(e) => setFile(e.target.files[0])}
                                                                />
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="mx-auto flex space-x-4 w-9/12 py-4">
                                                        <button type='button' onClick={handlePartOne} style={{ width: '80%' }} className="rounded shadow px-2 mx-auto py-1 bg-green-600 text-white font-medium">Previous</button>
                                                        <button type="submit" disabled={!isValid || !isDirty} style={{ width: '80%' }} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium">Next</button>
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

export default NewRequest