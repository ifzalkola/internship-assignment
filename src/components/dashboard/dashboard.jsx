import React from 'react';

import './dashboard.scss'

const Dashboard = ({setStep}) => {
    return (
        <div className='dashboard' style={{backgroundImage: `url('/assets/Bg.png')`}}>
            <div style={{backgroundImage: `url('/assets/Bg-2.1.png')`}} className='top-bg'>
                <img src="/assets/object 1.png" alt="" />
            </div>
            <h2>HURRY!!</h2>
            <h3>HUNGER DON'T WAIT</h3>
            <div className='bottom-bg'>
                <div className='buttons-container'>

                <button onClick={() => setStep(3)}>GET STARTED <br/>
                 <span>Avail Best Offers & Discounts Only For You</span>
                </button>
                <button>Continue Without Login</button>
                <button>Already a Tiffina Member? <span on>Login</span></button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;