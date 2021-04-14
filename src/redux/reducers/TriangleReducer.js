export default function TriangleReducer(initialState={
    width: 50,
    height: 50,
    color: '#000'
}, action){
    switch(action.type){
        case 'Triangle:Width':
            return{
                ...initialState,
                width: action.width
            }
        case 'Triangle:Height':
            return{
                ...initialState,
                height: action.height
            }
        case 'Triangle:Color':
            return{
                ...initialState,
                 color: action.color
            }
        default:
            return initialState
    }
}