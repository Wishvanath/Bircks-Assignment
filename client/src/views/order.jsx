import React from 'react'
import Navbar from '../component/navBar';

const Orders = () => {






    // return main component
    return(
        <div>
            <Navbar />
           

            {/* search bar section */}
            <div className="search_bar_wrapper">
                <div className="search_bar_inner">
                   <label htmlFor="searchTag" className="customer_name">Customer Name</label>
                   <input type="text" className="search_input"/>
                   <button className="btn btn-primary btn_black ml-4">Search</button>
                </div>
            </div>
            {/* end of searchbar */}



            {/* Order  body section */}

            <div className="order_body_wrapper">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-4 order_id_body">
                            <h3 className="label_blue">Order Id</h3>
                            <p>ORD1234</p>
                        </div>
                        <div className="col-sm-8 order_descp_body">
                                <label htmlFor="name">Name : Wishvanath Anand</label><br/>
                                <label htmlFor="order_details">Order Details:</label>

                                <div className="row order_details_body">
                                    <div className="bricks_body">
                                        234
                                    </div>
                                    <div className="btn_edit_section">
                                        <button className="btn btn_edit">Edit</button>
                                    </div>
                                    <div className="btn_dispatch_section">
                                        <button className="btn btn_dispatch">Dispatch</button>
                                    </div>
                                    <div className="btn_fulfil_section">
                                        <button className="btn btn-success btn_fulfil">Fulfil</button>
                                    </div>

                                </div>
                        </div>
                        
                    </div>








                    <div className="row mt-5">
                        <div className="col-sm-4 order_id_body">
                            <h3 className="label_blue">Order Id</h3>
                            <p>ORD1234</p>
                        </div>
                        <div className="col-sm-8 order_descp_body">
                                <label htmlFor="name">Name : Wishvanath Anand</label><br/>
                                <label htmlFor="order_details">Order Details:</label>

                                <div className="row order_details_body">
                                    <div className="bricks_body">
                                        234
                                    </div>
                                    <div className="btn_edit_section">
                                        <button className="btn btn_edit">Edit</button>
                                    </div>
                                    <div className="btn_dispatch_section">
                                        <button className="btn btn_dispatch">Dispatch</button>
                                    </div>
                                    <div className="btn_fulfil_section">
                                        <button className="btn btn-success btn_fulfil">Fulfil</button>
                                    </div>

                                </div>
                        </div>
                        
                    </div>


                    
                </div>
            </div>    



            {/* end of order body section */}
        </div>
    )
}

export default Orders;