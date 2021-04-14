import React from 'react'

import CustomSlider from '../../../helpers/CustomSlider';
import CustomInput from '../../../helpers/CustomInput'
import ChooseColor from '../../../helpers/ChooseColor'

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export default function CircleComponent({classes, Radius, SetRadius, Color, SetColor, ChangeStroke, AddCircle}){
    return(
        <div className={classes.CircleWrapper}>
            <div>
                <Typography>Radius:</Typography>
                <CustomInput step={1} min={5} max={100} SetValue={SetRadius} Value={Radius}></CustomInput>
            </div>
            <ChooseColor SetColor={SetColor} Color={Color}/>
            <CustomSlider max={8} min={3} title={'Stroke width'} onChange={ChangeStroke}/>
            <Button color="primary" variant="contained" onClick = {AddCircle}>Add Circle</Button>
        </div>
    )
}