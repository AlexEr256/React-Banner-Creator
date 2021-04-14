export function ImageType(choice){
    return{
        type:'TYPE:IMAGE',
        choice
    }
}

export function ImageURL(url){
    return{
        type:'URL:IMAGE',
        url
    }
}