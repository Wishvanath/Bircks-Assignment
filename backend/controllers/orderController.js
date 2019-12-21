const client = require('../connection')
var random = require('random-number');
var options = {
    min:  000,
    max:  100000,
    integer: true
}
// function declation
exports.allOrders =(req, res)=>{
    
    const fetchAllOrdersQuery ={
        text: 'Select * from public.order_details'
    }
    
    client.query(fetchAllOrdersQuery, function(err, result){
        if(err){
            return res.json({
                success: false,
                message: "Cannot Fetch the data from database"
            })
        }else{
            res.json({
                success: true,
                data : result.rows
            })
        }
    })
}

exports.newOrders = (req, res) => {
    // destruct the user signup data
    const {
        user_name,
        no_of_bricks,
        order_date
        
    } = req.body
    const order_id = 'ord-' + random(options);
    const order_status = "not dispatched";

    // check if fields are empty then handle the error
    if(!user_name){
        return res.json({
            success: false,
            message: "User Name is Empty"
        })
    }
    if(!no_of_bricks){
        return res.json({
            success: false,
            message: "Number of Bricks are empty"
        })
    }
    if(!order_date){
        return res.json({
            success: false,
            message: "Date is empty"
        })
    }

    // 
    const insertQuery = {
        text: `INSERT INTO public.order_details(
            order_id, name, no_of_bricks, order_date, order_status)
            VALUES ('${order_id}', '${user_name}', '${no_of_bricks}', '${order_date}', '${order_status}');`
    }

    client.query(insertQuery, function(err, result){
        if(err){
            return res.json({
                success: false,
                message: "Cannot Inserted data into the database"
            })
        }else{
            // console.log(result)
            return res.json({
                success: true,
                message: "Your Order has recieved successfully"
            })
        }
    })
}