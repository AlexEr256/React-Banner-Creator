export default function CircleReducer(initialState={
    radius: 30,
    color: '#000',
    stroke: 5,
}, action){
    switch(action.type){
        case 'Circle:Radius':
            return{
                ...initialState,
                radius: action.radius
            }
        case 'Circle:Color':
            return{
                ...initialState,
                color: action.color
            }
        case 'Circle:Stroke':
            return{
                ...initialState,
                stroke: action.stroke
            }
        default:
            return initialState
    }
}