export default function MapReducer( initialState={
    image: false,
    color:'#E5DBDB'
}, action
){
    switch(action.type){
        case 'Map:Image':
            return{
                ...initialState,
                image:action.flag
            }
        case 'Map:Color':
            return{
                ...initialState,
                color:action.color    
            }
        default:
            return initialState
    }
}