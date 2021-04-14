import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import ChooseColor from '../../../helpers/ChooseColor';

export default function MapComponent({IsImage, handleChange, ClearHandler, SetColor, Color}){
    return(
        <div>
            <FormControlLabel
                control={<Switch checked={IsImage} onChange={handleChange} name="background" />}
                label="Use Image as work object?"
            />
            <Button onClick={ClearHandler} style={{width:'50%', margin:'10px', fontSize:'12px'}} variant="contained" color="primary">
                  Clear background
            </Button>
            <ChooseColor SetColor={SetColor} Color={Color}/>
      </div>
    )
}