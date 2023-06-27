const mongoose = require('mongoose')
const Item = require('../model/itemSchema')
const addItems  = async(req, res, next) => {
    try{
        const {name, description, message} = req.body

        // creating user with query
        const item_response = await Item.create({
            name,
            description,
            message
        })

        if(item_response){
            return res.status(200).json({
                // sending good request with 200
                message : "Item Added Successfully",
                data : item_response,
                status : 200
            })
        }
        return res.status(401).json({
            // sending bad request
            message : "unable to Add Items",
            status : 401
        })
    }catch(Error){
        console.log(Error)
        return res.status(500).json({
            message : "something went wrong",
            data : Error,
            status : 500
        })
    }
}


const getItems = async(req, res, next) => {
    try{
        // query for finding all items
        const item_response = await Item.find({})
        if(item_response){
            // sending good request wih 200
            return res.status(200).json({
                message : "Items fetched Successfully",
                // sending data to the response
                data: item_response,
                status : 200
            })
        }
        return res.status(401).json({
            message : "unable to process this request",
            status : 401
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message : "something went wrong",
            status : 500
        })
    }
}

module.exports =  {addItems, getItems}