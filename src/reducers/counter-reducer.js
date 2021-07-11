import { actionTypes } from '../actions'
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.INC:
        case actionTypes.DEC: {
            return  action.payload 
        }
        case actionTypes.ADD : {
            return state+action.payload
        }
        default :{
            return state
        }
    }
}

