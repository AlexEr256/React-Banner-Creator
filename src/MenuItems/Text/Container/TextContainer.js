import React from 'react'
import TextComponent from '../Component/TextComponent'
import { TextMessage, TextFont, TextColor, TextOpacity} from '../../../redux/actions/TextActions'
import { connect } from 'react-redux';
import {fabric} from 'fabric'

import insertSpaces from '../../../helpers/ThreeRowText'

import { makeStyles } from '@material-ui/core/styles';





const fonts = [16,17,18,19,20,21,22]

const useStyles = makeStyles((theme) => ({
    TextWrapper:{
        width:'100%',
        display:'flex',
        flexDirection:'column'
    },
    Input:{
      display:'flex',
      flexDirection:'row',
      padding: '15px'
    },
    InputText:{
        width:'60%',
        padding:'10px',
        marginRight:'10px'
    },
    TextButton:{
        width:'50%',
        margin:'auto'
    },
}))


 function TextContainer({canvas, color, SetColor, font, SetFont, message, SetMessage, opacity, SetOpacity}){

  const ChangeFont = (event) => {
    SetFont(event.target.value);
  };

  const ChangeMessage = (event) => {
    SetMessage(event.target.value);
  };

  const ChangeOpacity = (event) => {
    SetOpacity(+event.target.ariaValueNow);
  };


    const classes = useStyles();

    function AddText(){
      if(!message){
        return alert("enter text first")
      }
      let preprocessedText = insertSpaces(message, canvas.width, font) || message;
      let text = new fabric.Textbox(preprocessedText, {
        width: canvas.width,
        fontFamily: 'arial black',
        fill: color,
        fontSize: font,
        opacity:opacity/100,
      })
      canvas.add(text);
      canvas.renderAll();
    }

    return(
        <TextComponent
            classes = {classes}
            ChangeMessage = {ChangeMessage}
            font = {font}
            ChangeFont = {ChangeFont}
            fonts={fonts}
            AddText = {AddText}
            SetColor = {SetColor}
            color = {color}
            ChangeOpacity = {ChangeOpacity}
        />
    )
}

function mapStatetoProps(state){
  return{
      message: state.TextReducer.message,
      font: state.TextReducer.font,
      color: state.TextReducer.color,
      opacity:state.TextReducer.opacity
  }
}

function mapDispatchToProps(dispatch){
  return{
      SetMessage: (message)  => dispatch(TextMessage(message)),
      SetFont: (font)  => dispatch(TextFont(font)),
      SetColor: (color)  => dispatch(TextColor(color)),
      SetOpacity: (opacity)  => dispatch(TextOpacity(opacity)),

  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TextContainer)