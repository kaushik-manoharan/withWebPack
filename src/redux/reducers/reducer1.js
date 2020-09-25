export const selectedCourse = (state=[], action)=>{
    switch (action.type) {
        case "SET_COURSE": return action.payload;
        default:return state;
    }}