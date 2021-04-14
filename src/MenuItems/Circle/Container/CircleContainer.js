import React from 'react'
import CircleComponent from '../Component/CircleComponent'
import { CircleRadius, CircleStroke, CircleColor } from '../../../redux/actions/CircleActions';
import { connect } from 'react-redux';
import { fabric} from 'fabric'


import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    CircleWrapper:{
        width:'100%'
    }
}))


 function CircleContainer({canvas, Radius, SetRadius, Color, SetColor, Stroke, SetStroke}){

    const classes = useStyles();

    function ChangeStroke(e){
        SetStroke(+e.target.ariaValueNow);
    }

    function AddCircle(){
        let circle = new fabric.Circle({
            radius: Radius,
            fill: Color,
            stroke: 'black',
            strokeWidth: Stroke,
            originX: 'center', 
            originY: 'center' 
        });

        canvas.centerObject(circle)
        canvas.add(circle);
        canvas.renderAll();
    }

    return(
        <CircleComponent
            classes={classes}
            Radius = {Radius}
            SetRadius = {SetRadius}
            Color = {Color}
            SetColor = {SetColor}
            ChangeStroke = {ChangeStroke}
            AddCircle = {AddCircle}
        />
    )

}

function mapStateToProps(state){
    return{
        Radius: state.CircleReducer.radius,
        Color: state.CircleReducer.color,
        Stroke: state.CircleReducer.stroke
    }
}

function mapDispatchToProps(dispatch){
    return{
        SetRadius: (radius) => dispatch(CircleRadius(radius)),
        SetColor: (color) => dispatch(CircleColor(color)),
        SetStroke: (stroke) => dispatch(CircleStroke(stroke))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CircleContainer)