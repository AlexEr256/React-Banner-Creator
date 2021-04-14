import React from 'react';
import {fabric} from 'fabric'

export default function Canvas({canvas, setCanvas}){

  const ImageRef = React.useRef(null);

  function initCanvas(){
     canvas = new fabric.Canvas('canvas', {
      height: 600,
      width: 1100,
      backgroundColor: 'pink'
      })

      return canvas
    }

    React.useEffect(() => {
        setCanvas(initCanvas());       
        ImageRef.current.parentNode.style.width = '98%';
        ImageRef.current.parentNode.style.height = '100%';      
        ImageRef.current.style.width = '100%';
        ImageRef.current.style.height = '100%';
        ImageRef.current.nextElementSibling.style.width ='100%';
        ImageRef.current.nextElementSibling.style.height ='100%';
        document.addEventListener('keydown', deleteActiveObject);
    }, []);




    function deleteActiveObject(e){
      if(canvas){
        let selected = canvas.getActiveObjects();
        if(selected){
          if(e && (e.keyCode === 8 || e.keyCode === 46 )){
            selected.forEach((item) =>{
              canvas.remove(item);
            })
            canvas.renderAll();
          }
        }       
      }
    }

  return(
    <div style={{width:'100%', height:'100%'}}>
      <canvas ref={ImageRef} id="canvas" />
    </div>
  );
}