export default function LineReducer(initialState={
    color:'#000'
}, action){
    switch(action.type){
        case 'Line:Color':
            return{
                ...initialState,
                 color: action.color
                }
        default:
            return initialState
    }
}