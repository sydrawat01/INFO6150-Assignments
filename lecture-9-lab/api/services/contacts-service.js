import Contact from './../models/contact.js'

export const save = () =>{
    const contact = new Contact(newContact);
    return contact.save();

}

export const search = (query) =>{
    const params = {...query};
    return Contact.find(params).exec();

}
export const get = (id) =>{
    const contact = Contact.findById(id).exec();
    return contact;
}

export const update = (updatedContact) =>{
    const contact = Contact.findByIdAndUpdate(updatedContact.id,updatedContact).exec();
    return contact;

}

export const remove = (id) =>{
    const contact = Contact.findByIdAndDelete(id).exec();
    return contact;

}

