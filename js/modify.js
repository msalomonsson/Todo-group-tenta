class Modify{


    static modifyTasks(data){
        /* Selector */
        const tasklist = document.querySelector('.task-list').addEventListener('click', modify)

        /* Modify tasks done/delete */
        function modify(e){
            e.preventDefault()
            
            /* Done task */
            if(e.target.classList.contains('doneTask')){
                if(!e.target.classList.contains('done')){
                    e.target.classList.add('done')
                    e.target.nextElementSibling.classList.add('done')
                }else{
                    e.target.classList.remove('done')
                    e.target.nextElementSibling.classList.remove('done')
                }
            }

            /* Delete Task */
            if(e.target.classList.contains('deleteTask')){
                const tasklist = document.querySelector('.task-list').removeChild(e.target.parentElement)
            }
        }

    }   

}

export default Modify