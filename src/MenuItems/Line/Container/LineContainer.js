import React from 'react'
import LineComponent from '../Component/LineComponent'
import { connect } from 'react-redux';
import {LineColor} from '../../../redux/actions/LineActions'
import {fabric} from 'fabric'


 function LineContainer({canvas, isOpen, Color, SetColor}){

    let line;
    let isDown;

    let [Canvas, SetCanvas] = React.useState(null);

    React.useEffect(() =>{
        if(canvas){
            SetCanvas(canvas);
        }
        if(isOpen){
            if(Canvas){
                Canvas.selection = false;
            }
            Canvas?.on('mouse:down', MouseDownHandler);
            Canvas?.on('mouse:move', MouseMoveHandler);
            Canvas?.on('mouse:up', MouseUpHandler);      
        }
        else if(!isOpen){
            if(Canvas){
                Canvas.selection = true;
            }
            Canvas?.off('mouse:down');
            Canvas?.off('mouse:move');
            Canvas?.off('mouse:up');
 
        }
       
    }, [canvas, isOpen, Color])

    function MouseDownHandler(o){
        isDown = true;
        var pointer = Canvas.getPointer(o.e);
        var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
        line = new fabric.Line(points, {
          strokeWidth: 2,
          stroke: Color,
          originX: 'center',
          originY: 'center'
        });
        Canvas.add(line);
        Canvas.renderAll()
    }

    function MouseMoveHandler(o){
        if (!isDown) return;
        var pointer = Canvas.getPointer(o.e);
        line.set({ x2: pointer.x, y2: pointer.y });
        Canvas.renderAll();
    }

    function MouseUpHandler(o){
        isDown = false;
    }

    return(
        <LineComponent
            SetColor = {SetColor}
            Color = {Color}
        />
    )

}

function mapStateToProps(state){
    return{
        Color: state.LineReducer.color
    }
}

function mapDispatchToProps(dispatch){
    return{
        SetColor: (color) => dispatch(LineColor(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineContainer)