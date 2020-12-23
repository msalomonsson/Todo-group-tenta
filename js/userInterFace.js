class Ui {

    static renderTasks(taskObj){
        /* Selector */
        const tasklist = document.querySelector('.task-list')
        const button = document.querySelector('.btn').addEventListener('click',addTask)

        
        /* Append todo.json to DOM */
        for(let i = 0; i < taskObj.length; i++){
            tasklist.innerHTML += `
            <li class="task-item">
                <div class="left-content">
                    <i class="far fa-check-circle doneTask"></i>
                    <p>${taskObj[i].task}</p>
                </div>
                <i class="fas fa-trash deleteTask"></i>
            </li>
        `;
        }

        /* Append input to DOM */
        function addTask(e){
            e.preventDefault()
            let inputBoxValue = document.querySelector('.input-box').value
            
            if(!inputBoxValue == ''){
                tasklist.innerHTML += `
                <li class="task-item">
                    <div class="left-content">
                        <i class="far fa-check-circle doneTask"></i>
                        <p>${inputBoxValue.charAt(0).toUpperCase() + inputBoxValue.slice(1)}</p>
                    </div>
                    <i class="fas fa-trash deleteTask"></i>
                </li
            `;
            }
            
            /* Clear inputs */
            const input = document.querySelector('.input-box')
            input.value = '';
        }
    }

    static renderHomePage(){
        const mainContainer = document.querySelector('.main-container').innerHTML = `
            <div class="top-wrapper">
                <h3>Martin JS App</h3>
            </div>
            <div class="form-container">
                <form>
                    <input type="text" class="input-box" placeholder="Add Task">
                    <div class="btn-div">
                        <button class="btn" type="submit">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div class="task-container">
                <ul class="task-list">
                
                </ul>
            </div>
        `;
    }

}

export default Ui