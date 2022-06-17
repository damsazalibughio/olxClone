import React from 'react'

function OlxAppBox() {
    return (
        <div className='d-flex justify-content-center olx-app-box'>
            <div className='olx-app'>
                <img src="../images/olxapp.png" alt="" /> 
            </div> 
            <div className='olx-app-detail mx-5 d-flex'>
                <div>
                    <h3 className='mt-5'>TRY THE OLX APP</h3>
                    <p className='h5'>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>
               
                <div className='border border-secondary border-end  align-self-center' style={{height:'70%'}}></div>
               
            </div> 
            <div className='align-self-center'>
                <h6>GET YOUR APP TODAY</h6>
                <div className='d-flex'>
                <div className='me-2'><img src="../images/olxappleapp.png" alt="" /></div>
                <div><img src="../images/olxgoogleapp.png" alt="" /></div>
                </div>
            </div> 
        </div>
    )
}

export default OlxAppBox
