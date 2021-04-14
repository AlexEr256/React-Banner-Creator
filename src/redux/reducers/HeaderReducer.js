export default function HeaderReducer(initialState={
    preview: false,
    modal: false
}, action){
    switch(action.type){
        case 'Header:Preview':
            return{
                ...initialState,
                preview: action.preview
            }
        case 'Header:Modal':
            return{
                ...initialState,
                modal: action.modal
            }
        default:
            return initialState

        
    }
}