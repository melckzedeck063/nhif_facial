import React from 'react'
import NavBar from '../containers/header';
import SideNav from '../sideBar/sideNav';
import { useNavigate } from 'react-router';

const Success = () => {
    const navigate = useNavigate();
    const backhome = () => {
        navigate('/dashboard');
    }
    return (
        <>
            <div className='flex w-full justify-between'>
                <SideNav />
                <div className='w-full'>
                    <NavBar />
                    <div className="bg-slate-50 py-10">
                        <div className="mx-auto w-11/12 lg:w-8/12 xl:w-8/12">
                            <div className="rounded-md shadow bg-white w-full" style={{
                                alignItems: 'center', textAlign: 'center', justifyItems: 'center', justifyContent: 'center', alignContent: 'center'
                            }}>
                                <div className="rounded-md bg-white w-full flex flex-wrap" style={{
                                    alignItems: 'center', textAlign: 'center', justifyItems: 'center', justifyContent: 'center', alignContent: 'center'
                                }}>
                                    <i>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/ihyatngg.json"
                                            trigger="loop"
                                            colors="primary:#4be1ec,secondary:#cb5eee"
                                            style={{ width: "100px", height: "100px" }}>
                                        </lord-icon>
                                    </i>
                                    <h1 className='text-lg font-semibold text-slate-900'> <span className='headline-m'>Successiful Saved!</span></h1>
                                </div>

                                <button type="click" style={{ width: '50%', padding: '10px',margin:'10px' }} className="rounded shadow px-2 mx-auto py-1 bg-sky-600 text-white font-medium" onClick={backhome}>Return Home</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success;