const initialState = {
    title: "add title",
    shortDesc: "add sort description",
    workplaceType:"add workplace type"
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "SUBMIT_DATA":
            const {title, shortDesc, workplaceType} = action.payload
            return {
                ...state,
                title: title,
                shortDesc: shortDesc,
                workplaceType: workplaceType
            }
        default: return state;
    }
}

export default reducer