class Modify{


    static modifyTasks(data){
        /* Selectors */
        const tasklist = document.querySelector('.task-list').addEventListener('click', modify)


        function modify(e){
            e.preventDefault()
            
            if(e.target.classList.contains('doneTask')){
                
                if(!e.target.classList.contains('done')){
                    e.target.classList.add('done')
                    e.target.nextElementSibling.classList.add('done')
                }else{
                    e.target.classList.remove('done')
                    e.target.nextElementSibling.classList.remove('done')
                }
            }

            if(e.target.classList.contains('deleteTask')){
                const tasklist = document.querySelector('.task-list').removeChild(e.target.parentElement)
                
            }
        }

    }   

}

export default Modify