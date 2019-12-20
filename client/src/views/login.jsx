import React from 'react'
import Navbar from '../component/navBar';

const Login = () => {






    // return main component
    return(
        <div>
            <Navbar />
            
            {/* home body section */}

            <div className="login_form_wrapper">
                <div className="login_logo">
                    <img src="img/logo.png" alt=""/>
                </div>
                <div className="login_form">
                   <form>
                       <div className="form-group">
                           <label htmlFor="userName">User Name :</label>
                           <input type="text" className="float-right"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="userName">Password :</label>
                           <input type="text" className="float-right"/>
                       </div>
                       <div className="btn_section">
                           <button className="btn btn-primary btn_blue float-right">Login</button>
                       </div>
                   </form>
                </div>
            </div>

            {/* end of home body section */}
        </div>
    )
}

export default Login;