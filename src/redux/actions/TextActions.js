
export function TextMessage(message){
    return{
        type:'Text:Message',
        message
    }
}

export function TextFont(font){
    return{
        type:'Text:Font',
        font
    }
}

export function TextColor(color){
    return{
        type:'Text:Color',
        color
    }
}

export function TextOpacity(opacity){
    return{
        type:'Text:Opacity',
        opacity
    }
}