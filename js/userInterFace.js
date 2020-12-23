class Ui {



    static render(taskObj){
        /* Selector */
        const tasklist = document.querySelector('.task-list')


        for(let i = 0; i < taskObj.length; i++){

            tasklist.innerHTML += `
            <li class="task-item">
                <div class="left-content">
                    <i class="far fa-check-circle"></i>
                    <p>${taskObj[i].task}</p>
                </div>
                <i class="fas fa-trash"></i>
            </li>
        `;
        }



    }


}

export default Ui