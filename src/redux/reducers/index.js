import { combineReducers } from 'redux'
import { selectedCourse } from './reducer1'



const allReducers = combineReducers(
    {
        selected: selectedCourse 
    }
)

export default allReducers