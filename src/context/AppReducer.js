export default (state, action) => {
    switch(action.type) {
        case 'DELETE_CHANGE':
            return {
                ...state,
                changes: state.changes.filter(change => change.id !== action.payload)
            }
            case 'ADD_CHANGE':
                return {
                    ...state,
                    changes: [action.payload, ...state.changes]
                }
        default: 
            return state;
    }
}