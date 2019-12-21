import React, {useState, useEffect} from 'react'
import Navbar from '../component/navBar'
import {newOrders} from '../api/orderAPI'
const Home = () => {

     // use state variable
     const[values, setValues] = useState({
        user_name:'',
        no_of_bricks:'',
        order_date:'',
        error: '',
        success:false
    })

      // handle change event
      const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const {user_name, no_of_bricks, order_date, error,success} = values;



    const clickSubmit = (event) => {
        event.preventDefault();
        // setValues({...values})

        // grab the form data 
        newOrders({user_name,no_of_bricks,order_date})
            .then( data => {
                // console.log(data.message)
                if(data.success){
                    setValues({...values, user_name:'', no_of_bricks: '', order_date: '',  error: '', success: true})
                }else{
                    setValues({...values, error: data.message, success: false})
                }
            })
            // .then(data => {
            //     console.log(data)
            // })
    }


    // 
    const showError = () => (
        // <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        //     {error}
        // </div>
        <div class="alert alert-warning alert-dismissible fade show alert_message" role="alert" style={{ display: error ? '' : 'none' }}>
            <strong>ERROR: </strong> {error}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )


// 
const showSuccess = () => (
    <div className="alert alert-success alert-dismissible fade show alert_message" style={{ display: success ? '' : 'none' }}>
        <strong>Sucessfully Placed your order ! </strong> {error}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
    </div>
) 

// 
const orderForm = () => (
    <div className="order_form">
    <form>
        <div className="form-group">
            <label htmlFor="userName">Name :</label>
            <input type="text" className="float-right" name="" onChange={handleChange('user_name')}/>
        </div>
        <div className="form-group">
            <label htmlFor="userName">Bricks :</label>
            <input type="text" className="float-right" name="" onChange={handleChange('no_of_bricks')}/>
        </div>
        <div className="form-group">
            <label htmlFor="userName">Name :</label>
            <input type="date" className="float-right" name= "" onChange={handleChange('order_date')}/>
        </div>
        <div className="btn_section">
            <button className="btn btn-primary btn_blue float-right" onClick={clickSubmit}>Order</button>
        </div>
    </form>
 </div>
)










    // return main component
    return(
        <div>
            <Navbar />
            
            {/* home body section */}
            {showSuccess()}
            {showError()}
            <div className="order_form_wrapper">
               {orderForm()}
            </div>

            {/* end of home body section */}
        </div>
    )
}

export default Home;