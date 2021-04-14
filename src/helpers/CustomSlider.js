import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) =>({
    strokeWrapper:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
}))

export default function CustomSlider({max, min, title, onChange}){

    const classes = useStyles();

    function ValueLabelComponent(props) {
        const { children, open, value } = props;
      
        return (
          <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
          </Tooltip>
        );
    }

    return(
        <div className = {classes.strokeWrapper}>
            <Typography gutterBottom>{title}</Typography>
            <Slider
                ValueLabelComponent={ValueLabelComponent}
                aria-label="custom thumb label"
                onChange={onChange}
                max = {max}
                min = {min}
                defaultValue={5}
            />
        </div>
    )
}