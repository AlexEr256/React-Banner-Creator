import React from 'react'
import RectangleComponent from '../Component/RectangleComponent'
import { connect } from 'react-redux';
import { RectangleWidth, RectangleHeight, RectangleColor } from '../../../redux/actions/RectangleActions';

import { fabric} from 'fabric'

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    RectangleWrapper:{
        width:'100%'
    },
    RectangleParam:{
        display:'flex',
        flexDirection:'row',
        marginBottom:'25px'
    },
    RectangleWidth:{
        marginRight:'20px'
    }
}))

 function RectangleContainer({canvas, Width, SetWidth, Height, SetHeight, Color, SetColor}){

    const classes = useStyles();

    function AddRectangle(){
        let rectangle = new fabric.Rect({
            fill: Color,
            width: +Width,
            height: +Height
        });
        canvas.centerObject(rectangle);
        canvas.add(rectangle);
        canvas.renderAll()
    }

    return(
        <RectangleComponent
            classes = {classes} 
            Width = {Width}
            SetWidth = {SetWidth}
            Height = {Height}
            SetHeight = {SetHeight}
            Color = {Color}
            SetColor = {SetColor}
            AddRectangle = {AddRectangle}
        />
    )

}

function mapStateToProps(state){
    return{
        Width:state.RectangleReducer.width,
        Height: state.RectangleReducer.height,
        Color: state.RectangleReducer.color
    }
}

function mapDispatchToProps(dispatch){
    return{
        SetWidth: (width) => dispatch(RectangleWidth(width)),
        SetHeight: (height) => dispatch(RectangleHeight(height)),
        SetColor: (color) => dispatch(RectangleColor(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RectangleContainer)