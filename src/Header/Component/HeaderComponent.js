import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import CodeIcon from '@material-ui/icons/Code';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


export default function HeaderComponent({classes, Preview, ChangePreview, SaveAsImg, ExportAsJSON, ExportAsSVG, Modal, handleClose}){
    return(
        <Container className={classes.headerWrapper} maxWidth={false}>
            <Typography className={classes.headerText} variant="h3" component="h1"> 
                React Banner Creator
            </Typography>

            <Box className={classes.HeaderButtonsWrapper} component="div" m={1}>
                <FormControlLabel
                    className={classes.Preview}
                    control={<Switch checked={Preview} color="primary" onChange={ChangePreview} name="Preview" />}
                    label="Preview"
                />

                <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.button} ${classes.HeaderButton}`}
                    endIcon={<ImageIcon></ImageIcon>}
                    onClick ={SaveAsImg}
                >
                    Save
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.button} ${classes.HeaderButton}`}
                    endIcon={<img className={classes.icon} alt="JSON" src='images/JSON.png'/>}
                    onClick ={ExportAsJSON}
                >
                    Export as JSON
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={`${classes.button} ${classes.HeaderButton}`}
                    endIcon={<CodeIcon/> }
                    onClick ={ExportAsSVG}
                >
                    Export as HTML
                </Button>

                <Snackbar open={Modal} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Copied to clipboard!
                    </Alert>
                </Snackbar>
            </Box>
        </Container>
    )
}