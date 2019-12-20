import React, {useState, useEffect} from 'react';
import Navbar from '../component/navBar';
import {Redirect} from 'react-router-dom';
import {signin, authenticate, isAuthenticated} from '../api/signupAPI';

const Login = () => {
    // use state variable
    // use state variable
    const [values, setValues] = useState({
        userName: 'Wishvanath',
        userPassword : 'admin',
        error: '',
        loading: false,
        redirectToReferrer: false,
    })
    //
    const handleChange = name => event => {
        setValues({...values, error:false, [name] : event.target.value})
    }
    const {userName, userPassword, loading, error, redirectToReferrer} = values;
    
    // event on button click
    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, error:false, loading: true})
        signin({userName, userPassword})
        .then(data => {
            console.log(data)
            if(!data.success){
                setValues({...values, error: data.message, loading:false})
            }else{
                console.log(data)
                setValues({...values,loading: false, redirectToReferrer:true})
                authenticate(
                    data, () => {
                        setValues({...values,loading: false, redirectToReferrer:true})
                    }
                )
            }
           
        })
    }

    // 
    const signInForm = () => (
        <div className="login_form">
            <form>
                <div className="form-group">
                    <label htmlFor="userName">User Name :</label>
                    <input type="text" className="float-right" name="" onChange={handleChange('userName')} value ={userName} />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">Password :</label>
                    <input type="text" className="float-right" onChange={handleChange('userPassword')} value ={userPassword} />
                </div>
                <div className="btn_section">
                    <button className="btn btn-primary btn_blue float-right" onClick={clickSubmit}>Login</button>
                </div>
            </form>
        </div>
    )

      // 
      const showError = () => (
        <div className ="alert alert-danger" style={{display: error ? '' : 'none'}}>
           {error}
        </div>
    )
 // 
 const showLoading = () => (
    loading && (
        <div className= "alert alert-info">
            <h2>Loading...</h2>
        </div>
    )
 )       


 const redirectUser = () => {
    if(redirectToReferrer){
        return <Redirect to ="/orders" />
       
    }
    
}














    // return main component
    return(
        <div>
            <Navbar />
            
            {/* home body section */}

            <div className="login_form_wrapper">
                <div className="login_logo">
                    <img src="img/logo.png" alt=""/>
                </div>
                
                {showLoading()}
           {showError()}
           {signInForm()}
           {redirectUser()}
            </div>

            {/* end of home body section */}
        </div>
    )
}

export default Login;