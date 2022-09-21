import mongoose from "mongoose";

// User Schema Model

const Schema = new mongoose.Schema({
    firstName:{
        type:String,
        required: 'First name is required.'
    },
    lastName:{
        type:String,
        required: ' Last name is required.'
    },
    phone:{
        type:String,
        required:'phone number is required'
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    modifiedDate:{
        type:Date,
        default:Date.now
    }
},{versionKey:false});

Schema.virtual('id',() => this._id.toHexString())
Schema.set('toJSON',{virtuals : true})

const model = mongoose.model('contact',Schema);

export default model;
