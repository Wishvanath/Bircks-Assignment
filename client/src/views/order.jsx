import React from 'react'
import ANavbar from '../component/adminNavBar';
import {getOrders} from '../api/orderAPI'
import {useState, useEffect } from 'react';
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const LoadOrder = () =>{
        // 
        getOrders().then( data =>{
            if(data.success){
                // console.log(data.data)
                setOrders(data.data)
                // console.log(orders)
            }
            else{
                
            }
        })

    }


    useEffect(()=> {
        LoadOrder()
    }, [])

    // return main component
    return(
        <div>
            <ANavbar />
            {/* search bar section */}
        {JSON.stringify(orders)}
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
                    {orders.map((order,i) => (
                    <div className="row mt-5" key={i}>
                    <div className="col-sm-4 order_id_body">
                        <h3 className="label_blue">Order Id</h3>
                    <p>{order.order_id}</p>
                    </div>
                    <div className="col-sm-8 order_descp_body">
                            <label htmlFor="name">Name : {order.name}</label><br/>
                            <label htmlFor="order_details">Order Details:</label> <br/>
                            <label htmlFor="date">Date: {order.order_date}</label> <br/>
                            <label >Status: <span className="dispatch_status">{order.order_status}</span></label>
                            <div className="row order_details_body">
                                <div className="bricks_body">
                                {order.no_of_bricks} BRICKS
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
                    ))}

                    
                </div>
            </div>    

          
            {/* end of order body section */}
        </div>
    )
}

export default Orders;