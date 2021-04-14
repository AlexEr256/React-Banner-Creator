import React from 'react'

import CustomSlider from '../../../helpers/CustomSlider'
import ChooseColor from '../../../helpers/ChooseColor';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


export default function TextComponent({classes, ChangeMessage, font, ChangeFont, fonts, AddText, SetColor, color, ChangeOpacity}){
    return(
        <div className={classes.TextWrapper}>
            <div className ={classes.Input}>
                <input
                    className={classes.InputText}
                    onChange ={ChangeMessage}
                    id="text"
                    placeholder="Enter text..."/>
                <TextField
                    style={{width:'30%'}}
                    id="fonts"
                    select
                    label="Font Size"
                    value={font}
                    onChange={ChangeFont}
                >
                    {fonts.map((option, index) => (
                        <MenuItem key={index} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                </TextField>
            </div>   

            <Button onClick={AddText} className={classes.TextButton} color="primary" variant="contained">Insert Text</Button>  

            <ChooseColor SetColor={SetColor} Color={color}/>

            <CustomSlider max={100} min={0} title={"Opacity"} onChange = {ChangeOpacity}/> 
        </div>
    )
}