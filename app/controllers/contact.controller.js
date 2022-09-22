const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");
// const ContactModel = require("../models/contactModel.js")
exports.findAll = async (req,res,next) => {
    // const contact = new ContactModel({
    //     email:'adsadsadsa',
    //     phone:'dsadasdasd',
    //     address:'dafasfa',
    //     name:'dasdasdsad'
    // })
    // contact.save()
    let documents= [];
    try {
        const contactService = new ContactService(MongoDB.client);
        const {name} = req.query;
        if(name){
            documents = await contactService.findByName(name);
        }else {documents = await contactService.find({});}
    } catch (error) {
        return next(
            new ApiError(500,"An error occurred while retrieving contacts")
        );
    }
    // return res.status(200).json({contact});
};

exports.findOne = async(req,res) => {
    res.send({ message: "findOne handler"});
};

exports.update = async (req,res,next) => {
    if(Object.keys(req.body).length ===0){
        return next(new ApiError(400,"Du lieu khong duoc cap nhat rong"));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.update(req.params.id,req.body)
        if(!document){
            return next(new ApiError(404,"Contact not found"));
        }
        return res.send({message: "Contact was updated successfully"});
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang cap nhat voi id=${req.params.id}`));
    }
};

exports.delete =async (req,res,next) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.delete(req.params.id)
        if(!document){
            return next(new ApiError(404,"Contact not found"));
        }
        return res.send({message: "Contact was updated successfully"});
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang xoa voi id=${req.params.id}`));
    }
};

exports.deleteAll = async(_req,res,next) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const deletedCount = await contactService.deleteAll();
        return res.send({message: `${deletedCount}Contact was updated successfully`});
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang xoa`));
    }
};

exports.findAllFavorite = async(_req,res,next) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const documents = await contactService.findFavorite();
        return res.send(documents);
    } catch (error) {
        return next( new ApiError(500,`Loi khi dang tim kiem yeu thich `));
    }
};

exports.create = async (_req,res,next) =>{
    console.log(_req.body)
    if(!_req.body?.name){
        return next(new ApiError(400,"Name can not be empty"));
    }
    try {
        const contactService = new contactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
        
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
}

 