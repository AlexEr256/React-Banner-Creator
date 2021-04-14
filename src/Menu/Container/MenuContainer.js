import React from 'react'
import MenuComponent from '../Component/MenuComponent'
import {Search} from '../../redux/actions/SearchAction'
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import ImageContainer from '../../MenuItems/Image/Container/ImageContainer'
import TextContainer from '../../MenuItems/Text/Container/TextContainer'
import MapContainer from '../../MenuItems/Map/Container/MapContainer'
import LineContainer from '../../MenuItems/Line/Container/LineContainer'
import RectangleContainer from '../../MenuItems/Rectangle/Container/RectangleContainer';
import TriangleContainer  from '../../MenuItems/Triangle/Container/TriangleContainer';
import CircleContainer from '../../MenuItems/Circle/Container/CircleContainer';


const useStyles = makeStyles((theme) => ({
    MenuWrapper:{
      width:'30%',
      background:'rgb(242,244,248)',
      height:'100%',
      [theme.breakpoints.down('sm')]:{
        width:'100%'
      }
    },
    MenuItem:{
        margin:'0px 0px !important' ,
    },
    preview:{
      marginRight:'10px'
    },
    none:{
      display:'none'
    }
  }));


function MenuContainer({canvas, Pattern, SetPattern, Preview}){

    const classes = useStyles();
    const [LineOpen, SetLineOpen] = React.useState(false);

    const arr =[
      [<MapContainer canvas={canvas}/>, "Map", "setting-gears.png"],
      [<TextContainer canvas ={canvas}/>, "Text", "font.png"],
      [<ImageContainer canvas={canvas}/>, "Image", "photo.png"],
      [<TriangleContainer canvas={canvas}/>, "Triangle", "bleach.png"],
      [<RectangleContainer canvas={canvas}/>, "Rectangle", "rectangle.png"],
      [<CircleContainer canvas={canvas}/>, "Circle", "dry-clean.png"],
      [<LineContainer canvas={canvas} isOpen={LineOpen}/>, "Line", "line.png"],
    ]
    function ChangePattern(e){
      SetPattern(e.target.value);
    }

      return(
        <MenuComponent
            classes={classes}
            Preview = {Preview}
            ChangePattern = {ChangePattern}
            arr = {arr}
            SetLineOpen = {SetLineOpen}
            Pattern = {Pattern}
        />
    )
}

function mapStateToProps(state){
  return{
      Pattern: state.SearchReducer.pattern,
      Preview: state.HeaderReducer.preview,
  }
}

function mapDispatchToProps(dispatch){
  return{
    SetPattern: (pattern) => dispatch(Search(pattern))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)