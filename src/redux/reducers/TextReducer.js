export default function TextReducer(initialState={
    message:'',
    font: 16,
    color:'#000',
    opacity: 20
}, action){
    switch(action.type){
        case 'Text:Message':
            return{
                ...initialState,
                message: action.message
            }
        case 'Text:Font':
            return{
                ...initialState,
                font: action.font
            }
        case 'Text:Color':
            return{
                ...initialState,
                color: action.color
            }
        case 'Text:Opacity':
            return{
                ...initialState,
                opacity: action.opacity
            }
        default:
            return initialState
    }
}