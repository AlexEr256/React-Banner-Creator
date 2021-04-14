export default function RectangleReducer(initialState={
    width: 50, 
    height: 50,
    color: '#000'
}, action){
    switch(action.type){
        case 'Rectangle:Width':
            return{
                ...initialState,
                width: action.width
            }
        case 'Rectangle:Height':
            return{
                ...initialState,
                height: action.height
            }
        case 'Rectangle:Color':
                return{
                    ...initialState,
                    color: action.color
                }
        default:
            return initialState
    }
}