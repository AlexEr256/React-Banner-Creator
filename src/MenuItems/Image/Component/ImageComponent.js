import React from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export default function ImageContainer({classes, ImageType, handleChange, UploadFile, ChangeUrl, GetImage}){
    return(
    <div className = {classes.ImageWrapper}>
        <FormControl className = {classes.ImageFormControl}  component="fieldset">
            <FormLabel component="legend">Image Load Type</FormLabel>
            <RadioGroup row aria-label="image-choice" name="image-choice" value={ImageType} onChange={handleChange}> 
                <FormControlLabel  value="File Upload" control={<Radio color="primary" />} label="File Upload" />
                <FormControlLabel value="Image URL" control={<Radio color="primary" />} label="Image URL" />
            </RadioGroup>
        </FormControl>

        <div className={classes.ChoiceWrapper}>
            {ImageType === 'File Upload' ? 
            <Box className={classes.FileUploader} component="div" m={1}>
                <input
                    accept="image/*"
                    onChange = {UploadFile}
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                />
                <label className={classes.FileUploaderLabel} htmlFor="contained-button-file">
                    <IconButton className={classes.FileUploaderLabelIcon} color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera className={classes.FileUploaderLabelIcon} />
                    </IconButton>
                    <span className={classes.FileUploaderLabelText}>Click to this area to upload</span>  
                    <span>Support for a single file</span>  
                </label>
            </Box>
        :
            <Box className={classes.InputWrapper} component="div" m={1}>
                <input
                    className={classes.InputFile}
                    id="file"
                    onChange={ChangeUrl}
                    placeholder="URL of your file"
                />
                <Button onClick={GetImage} className={classes.InputButton} color="primary" variant="contained">Get image</Button>
            </Box> }

        </div>
    </div>
    )
}