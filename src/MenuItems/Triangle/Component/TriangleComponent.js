import React from 'react'

import Button from '@material-ui/core/Button';
import CustomInput from '../../../helpers/CustomInput'
import ChooseColor from '../../../helpers/ChooseColor';
import { Typography } from '@material-ui/core';

export default function TriangleComponent({classes, SetWidth, Width, SetHeight, Height, SetColor, Color, AddTriangle}){
    return(
        <div className={classes.TriangleWrapper}>
            <div className={classes.TriangleParam}>
                <div className={classes.TriangleWidth}>
                    <Typography>Width:</Typography>
                    <CustomInput step={1} min={5} max={150} SetValue={SetWidth} Value={Width}></CustomInput>
                </div>
                 <div>
                    <Typography>Height:</Typography>
                    <CustomInput step={1} min={5} max={150} SetValue={SetHeight} Value={Height}></CustomInput>
                </div>
            </div>

            <ChooseColor SetColor={SetColor} Color={Color}/>

            <Button color="primary" variant="contained" onClick = {AddTriangle}>Add Triangle</Button>
        </div>
    )
}