export const save = () =>{
    const todo = new ToDo(newTodo);
    return todo.save();

}

export const search = (query) =>{
    const params = {...query};
    return todo.find(params).exec();

}
export const get = (id) =>{
    const todo = todo.findById(id).exec();
    return todo;
}

export const to = (updatedtoDo) =>{
    const todo = ToDo.findByIdAndUpdate(updatedTodo.id,updatedtoDo).exec();
    return todo;

}

export const remove = (id) =>{
    const todo = Todo.findByIdAndDelete(id).exec();
    return todo;

}