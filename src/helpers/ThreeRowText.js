function getTextWidth(text, font){
    let c = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    let context = c.getContext('2d')
    context.font = font
    let metrics = context.measureText(text);
    return metrics.width
}

export default function insertSpaces(text, width, font){
  let gaps = 0;
  let iterations = 0;
  let t;
  let k;
  let j;
  for(let i=0; i<text.length; i++){
    let textWidth = getTextWidth(Array.from(text.slice(0, i+1)), font);
    if(iterations){
        textWidth = textWidth - width/1.25*iterations;
        if(textWidth >= width/1.25 && iterations === 1){
          gaps++;
          iterations++;
          k = Array.from(text.slice(t.length-1, i+1)).join('') + '\n'
        } 
        else if(textWidth >= width/1.25 && iterations === 2){
          gaps++;
          iterations++;
          j = Array.from(text.slice(k.length+t.length-2, i+1)).join('') + '\n'
          if(gaps === 3){
            return t + k + j;   
          } 
        }    
    }
    else if(iterations === 0){
      if(textWidth >= width/1.25){
        gaps++;
        iterations++;
        t = Array.from(text.slice(0, i+1)).join('') + '\n';
      }
    }
  

  }


}