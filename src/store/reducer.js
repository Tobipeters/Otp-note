import * as actionTypes from "./action"

const initialState = {
    show: false,
    allNotes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                show: !state.show
            }
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                allNotes: state.allNotes.concat(action.value)
            }
        case actionTypes.DELETE_NOTE:
            return {
                ...state,
                allNotes: state.allNotes.filter(note => note.timeStamp !== action.timeStamp)
            }
            // case actionTypes.ADD_FAVOURITE_NOTE:
            //     return {
            //         ...state,
            //         allNotes: !state.allNotes.favourite
            //     }
    }
    return state;
}

export default reducer;