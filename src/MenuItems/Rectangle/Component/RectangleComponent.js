import React from 'react'

import CustomInput from '../../../helpers/CustomInput'
import Button from '@material-ui/core/Button';
import ChooseColor from '../../../helpers/ChooseColor';
import { Typography } from '@material-ui/core';

export default function RectangleComponent({classes, Width, SetWidth, Height, SetHeight, Color, SetColor, AddRectangle}){
    return(
    <div className={classes.RectangleWrapper}>
        <div className={classes.RectangleParam}>
            <div className={classes.RectangleWidth}>
                <Typography>Width:</Typography>
                <CustomInput step={1} min={5} max={150} SetValue={SetWidth} Value={Width}></CustomInput>
            </div>
            <div>
                <Typography>Height:</Typography>
                <CustomInput step={1} min={5} max={150} SetValue={SetHeight} Value={Height}></CustomInput>
            </div>
        </div>

        <ChooseColor SetColor={SetColor} Color={Color}/>
        <Button color="primary" variant="contained" onClick = {AddRectangle}>Add Rectangle</Button>
    </div> 
    )
}