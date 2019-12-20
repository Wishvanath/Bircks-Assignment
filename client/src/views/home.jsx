import React from 'react'
import Navbar from '../component/navBar'

const Home = () => {

    




    // return main component
    return(
        <div>
            <Navbar />
            
            {/* home body section */}

            <div className="order_form_wrapper">
                <div className="order_form">
                   <form>
                       <div className="form-group">
                           <label htmlFor="userName">Name :</label>
                           <input type="text" className="float-right"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="userName">Bricks :</label>
                           <input type="text" className="float-right"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="userName">Name :</label>
                           <input type="date" className="float-right"/>
                       </div>
                       <div className="btn_section">
                           <button className="btn btn-primary btn_blue float-right">Order</button>
                       </div>
                   </form>
                </div>
            </div>

            {/* end of home body section */}
        </div>
    )
}

export default Home;