export const actionTypes = {
    INC:'INC_COUNTER',
    DEC:'DEC_COUNTER',
    ADD:'ADD_TO_COUNTER'
}

export const incCounter = (value)=>{
    return {
        type:actionTypes.INC,
        payload:++value
    }
}
export const decCounter = (value)=>{
    return {
        type:actionTypes.DEC,
        payload:--value
    }
}

export const addToCounter = (value)=>{
    return {
        type:actionTypes.ADD,
        payload:value
    }
}
