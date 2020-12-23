/* Importing classes */
import Ui from './userInterFace.js'
import Data from './data.js'
import Modify from './modify.js'


(function app(){

    window.addEventListener('DOMContentLoaded', (e) => {
        Ui.renderHomePage()

        Data.getTodoTask()
        .then(data => {
            Ui.renderTasks(data)
            Modify.modifyTasks()
        })
    });
    


}())