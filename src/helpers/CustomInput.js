import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles({
    input: {
      width: 42,
    },
  });

export default function CustomInput({step, min, max, SetValue, Value}){

    const classes = useStyles();

    const handleSliderChange = (event) => {
        SetValue(event.target.value);
      };

    const handleBlur = () => {
        if (Value < min) {
          SetValue(min);
        } else if (Value > max) {
          SetValue(max);
        }
      };

    return(
        <Input
            className={classes.input}
            value={Value}
            margin="dense"
            onChange={handleSliderChange}
            onBlur={handleBlur}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
    )
}