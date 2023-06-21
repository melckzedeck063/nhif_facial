import React, { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { redirect, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../assets/images/NHIF_Official_Logo.png'
import NavBar from '../containers/header';
import SideNav from '../sideBar/sideNav';
import { myProfile, updateMe } from '../../store/actions/user_actions';
import dataforC from './json_files/countries.json'
import Loader from './component/loader/loader';
import './style.css';


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
    // email: Yup
    //     .string()
    //     .required()
    //     .email()
    //     .trim(),
})

function Settings() {
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const dispatch = useDispatch()
    const [reload, setReload] = useState(0);
    // const [profileImg, setProfileImg] = useState('');


    let country = new Yup.array();
    country = dataforC;

    setTimeout(() => {
        if (reload < 5) {
            setReload(reload => reload + 1);
        }
    }, 1000);

    const profile = useSelector(state => state.users);

    useEffect(() => {
        if (profile && profile.user_profile === null && reload < 3) {
            dispatch(myProfile());

        }
    })

    const formData = new FormData();
    formData.append('file', file)

    const { register, handleSubmit, reset, formState: { errors, isValid, isDirty, isSubmitSuccessful } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        resolver: yupResolver(schema)
    })

    // const onSubmit = data => {
    //     dispatch(updateMe(data));

    //     setTimeout(() => {
    //         navigate('/success')
    //     }, 4000);
    // }
    // const openHandle = () => {
    //     let photoget = document.getElementById("photoget");
    //     photoget.click();
    // }
    // const newpost = () => {
    //     let photoget, file, reader;
    //     photoget = document.getElementById("photoget");
    //     file = photoget.files[0];
    //     reader = new FileReader();
    //     if (file) {
    //         reader.readAsDataURL(file);
    //         reader.onloadstart = function () {
    //             console.log("Post Analysing ...");
    //         }
    //         reader.onload = function () {
    //             setProfileImg(this.result);
    //             console.log("Successiful Uploaded");

    //         }
    //         reader.onloadend = function () {
    //         }
    //         reader.onerror = function () {
    //             alert("Opps, there was and Error During Upload");
    //         }
    //     }else{
    //         console.log("No choice");
    //     }
    // }
    const onSubmit = data => {
        dispatch(updateMe(data));

        setTimeout(() => {
            // navigate('/success')
        }, 4000);
    }
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                firstName: '',
                lastName: '',
                dob: '',
                telephone: '',
                email: '',
                password: '',
                confirmPassword: '',
                card_type: '',
                nationality:''

            })
        }
    });
    return (
        <>
            <div className='flex w-full justify-between'>
                <SideNav />
                <div className='w-full'>
                    <NavBar />
                    <div className="bg-slate-50 py-10">
                        <div className="mx-auto w-11/12 lg:w-8/12 xl:w-8/12">
                            <div className="rounded-md shadow bg-white w-full border-btn">

                                <div className="p-2">
                                    <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-1">
                                        {
                                            profile?.user_profile?.data?.data ? (
                                                <>
                                                    <div className={``}>
                                                        <div className="text-center font-bold py-3 text-sky-500 sm:text-sm border-bb mb-2 border-slate-300 xsm:text-sm text-lg"><span className='headline-m'>Profile Setting</span></div>
                                                        <div className="w-28 h-28 mx-auto" style={{
                                                            position: 'relative'
                                                        }}>
                                                            {/* <div className='overlaying rounded-full'>
                                                                file uploader
                                                                <button onClick={openHandle} style={{
                                                                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: '', color: 'rgb(214, 214, 214)'
                                                                }} className='text-sm'>CHANGE</button>
                                                                <input type='file' hidden id='photoget' onChange={newpost} accept='image/*' />
                                                            </div> */}
                                                            <img src={image} alt="" className='w-30 h-30 ' />
                                                        </div>
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
                                                                    defaultValue={profile.user_profile.data.data.surname}
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
                                                                <span className="text-red-500 text-sm">{errors.gender?.gender}</span>
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
                                                                <label htmlFor="Nationality" className='text-sky-600'>Nationality</label> <br />
                                                                <select name="" id="" className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 border-sky-500`} style={{
                                                                    fontSize: 'small'
                                                                }}>
                                                                    {
                                                                        country.country !== undefined && country.country.length > 0 ? country.country.map((country_, i) => <option key={i} className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 border-sky-500`} style={{
                                                                            fontSize: 'small'
                                                                        }} value={country_.name}>{country_.name}</option>) : <option style={{
                                                                            fontSize: 'small'
                                                                        }}>please wait ...</option>
                                                                    }
                                                                </select>
                                                                <span className="text-red-500 text-sm">{errors.nationality?.message}</span>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-1 w-full mx-auto mb-3">
                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="telephone" className='text-sky-600'>Telephone</label> <br />
                                                                <input type="number" placeholder='Telephone'
                                                                    className={`rounded-md w-11/12 border-2 focus:outline-none px-2 xl:py-2 lg:py-2 md:py-2 py-1 ${errors.telephone ? "border-red-500" : "border-sky-500"}`}
                                                                    defaultValue={profile.user_profile.data.data.telephone}
                                                                    {...register("telephone")}
                                                                />
                                                                <span className="text-red-500 text-sm">{errors.telephone?.message}</span>
                                                            </div>

                                                            <div className="w-10/12 xsm:w-full sm:w-11/12 mx-auto">
                                                                <label htmlFor="Lastname" className='text-sky-600'>Valid Through</label> <br />
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
                                                        <div className="mx-auto w-9/12 py-4 pt-center">
                                                            {/* <button type="submit"  style={{ width: '50%', padding: '10px',margin:'10px' }} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium"><div style={{position:'relative',zIndex:'2'}}>Submit</div></button> */}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                                :
                                                <>
                                                    <div className="text-lg text-sky-600 text-center font-medium animate-pulse"><Loader /></div>
                                                </>
                                        }
                                        {/* END PART_ONE  */}
                                        <div className="mx-auto w-9/12 py-4">
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

export default Settings