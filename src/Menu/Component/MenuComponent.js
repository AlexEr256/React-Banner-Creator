import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

export default function MenuComponent({classes, Preview, ChangePattern, arr, SetLineOpen, Pattern}){
    return(
        !Preview ? <Box className={classes.MenuWrapper} component="div" m={1}>
        <Scrollbars autoHide style={{ width:'100%', height:'100%' }}>
          <FormControl className={classes.margin} style={{width:'100%'}}>
          <Input
            placeholder="Search..."
            id="input-with-icon-adornment"
            onChange = {ChangePattern}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon  />
              </InputAdornment>
            }
          /></FormControl>
  
          {arr.filter(item => item[1].includes(Pattern)).map((item, index) =>{
            return  (
              <Accordion key={item[1]} title={item[1]} className = {classes.MenuItem} onChange={index === arr.length-1 ? (e, expanded) => SetLineOpen(expanded) : null}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                 <img alt={item[2]} className={classes.preview}  src={`/images/${item[2]}`}/>
                <Typography className={classes.heading}>{item[1]}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item[0]}
              </AccordionDetails>
            </Accordion>
            )        
          })}    
        </Scrollbars>
      </Box> : null
    )
}