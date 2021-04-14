import React from 'react'
import { ChromePicker } from 'react-color'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ColorPicker:{
      width:'30px',
      height:'30px',
      marginTop:'10px',
      border:'1px solid black',
      borderRadius:'50%',
      background: '#000000',
      '&:focus':{
          outline:'none',          
      }
  },
  FillColor:{
    display:'flex',
    flexDirection: 'column',
    alignItems:'flex-start'
  },
  ChromePicker:{
      padding:'20px',
      marginTop:'10px'
  }
  }))

export default function ChooseColor({SetColor, Color}){

    const [Picker, SetPicker] = React.useState(false);
    const classes = useStyles();

    return(
        <div className={classes.FillColor}>
        <span>Fill Color</span>
        <button
            onClick={() => SetPicker(Picker => !Picker)}
            className={classes.ColorPicker}
            style={{background: Color}}>
        </button>
        { Picker ? 
        <ChromePicker
            className={classes.ChromePicker}
            color={Color}
            onChange = {(c) => SetColor(c.hex)}/>
        : null}
    </div>
    )
}