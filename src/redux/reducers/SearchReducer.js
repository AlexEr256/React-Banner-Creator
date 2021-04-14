export default function SearchReducer(initialState={
    pattern:'',
}, action){
    switch(action.type){
        case 'Search:Pattern':
            return{
                ...initialState,
                pattern:action.pattern
            }
        default:
            return initialState
    }
}