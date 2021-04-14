

export default function ImageReducer(initialState={choice:'File Upload', url:''}, action){
    switch(action.type){
        case 'TYPE:IMAGE':
            return{
                ...initialState,
                choice: action.choice
            }
        case 'URL:IMAGE':
            return{
                ...initialState,
                url:action.url
            }
        default:
            return initialState
    }
}