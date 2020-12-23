class Data {

    static getTodoTask(){
        var fetchTodoData = fetch('./todo.json')
        .then(res => res.json())
        return fetchTodoData
    }

}

export default Data