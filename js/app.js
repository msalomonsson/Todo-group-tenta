/* Importing classes */
import Ui from './userInterFace.js'
import Data from './data.js'


(function app(){

    
    Data.getTodoTask()
    .then(data => {
        Ui.render(data)
    })


}())