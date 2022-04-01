export const submitData = (data) => {
    return {
        type: "SUBMIT_DATA",
        payload: {
           title: data.title,
           shortDesc: data.shortDesc,
           workplaceType:data.workplaceType,
        }
    }
}