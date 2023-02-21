import React from 'react'

import './project1.css';
import './manager.css';


export default function Managertoemp() {
    return (
        <div>
            <div className='HeadBox'>
                    <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1435755683/ur698lax3hckifehtdpj.png" className="Navlogo" alt="INCEDO" srcset="" /></a>
                    
                    <button className="username" href="/timesheet"variant="outline-secondary">BACK TO MANAGER</button>{' '}
                    <button className="logout" href="/" variant="outline-secondary">LOGOUT</button>{' '}
                    
                   
                    {/* <div className='logoutbox'>Log out</div> */}
                    
                </div>
            <div class="toemp_timesheet">

                <div className="toemp_box">TIMESHEET ID</div>
                <div className="toemp_box">TIMESHEET ID</div>
                <div className="toemp_box">TIMESHEET ID</div>
                <div className="toemp_box">TIMESHEET ID</div>
                <div className="toemp_box">TIMESHEET ID</div>

                
            </div>
            <table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <th key={index}>Table heading</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </table>


           
        </div>
    )
}

