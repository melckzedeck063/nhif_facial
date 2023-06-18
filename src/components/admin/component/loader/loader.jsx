import React from 'react';
import './style.css';

const Loader = () => {
  return (
    <div className='center' style={{textAlign:'center',justifyContent:'center',alignItems:'center',position:'relative',width:'100%'}}>
        <div className="loader" style={{
            width:'40px',height:'40px',borderRadius:'50px',border:'3px solid royalblue',position:'relative'
        }}></div>
    </div>
  )
}

export default Loader;