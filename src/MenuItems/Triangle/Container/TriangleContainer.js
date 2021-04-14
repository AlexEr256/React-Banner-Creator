import React from 'react'
import TriangleComponent from '../Component/TriangleComponent'
import { TriangleColor, TriangleWidth, TriangleHeight } from '../../../redux/actions/TriangleActions';
import { connect } from 'react-redux';
import { fabric} from 'fabric'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    TriangleWrapper:{
        width:'100%'
    },
    TriangleParam:{
        display:'flex',
        flexDirection:'row',
        marginBottom:'25px'
    },
    TriangleWidth:{
        marginRight:'20px'
    }
}))

 function TriangleContainer({canvas, Width, SetWidth, Height, SetHeight, Color, SetColor}){

    const classes = useStyles();

    function AddTriangle(){
        let triangle = new fabric.Triangle({
            width: Width,
            height: Height, 
            fill: Color,
        });
        canvas.centerObject(triangle);
        canvas.add(triangle);
        canvas.renderAll()
    }

    return(
       <TriangleComponent
            classes = {classes}
            SetWidth = {SetWidth}
            Width = {Width}
            SetHeight = {SetHeight}
            Height = {Height}
            SetColor = {SetColor}
            Color = {Color}
            AddTriangle = {AddTriangle}
       />
    )

}

function mapStateToProps(state){
    return{
        Width: state.TriangleReducer.width,
        Height: state.TriangleReducer.height,
        Color: state.TriangleReducer.color
    }
}
function mapDispatchToProps(dispatch){
    return{
        SetWidth: (width) => dispatch(TriangleWidth(width)),
        SetHeight: (height) => dispatch(TriangleHeight(height)),
        SetColor: (color) => dispatch(TriangleColor(color))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TriangleContainer)