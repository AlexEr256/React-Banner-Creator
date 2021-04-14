import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import HeaderContainer from './Header/Container/HeaderContainer'
import MenuContainer from './Menu/Container/MenuContainer'
import Canvas from './Canvas/Canvas'

const useStyles = makeStyles((theme) =>({
  App:{
    textAlign: 'center',
    width:'100%',
    height:'100vh',
  },
  Main:{
    display:'flex',
    flexDirection:'row',
    height:'90%',
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
    }
  }
}))

function App() {

  const [canvas, setCanvas] = React.useState('');
  const classes = useStyles();



  return (
    <div className={classes.App}>
      <HeaderContainer canvas={canvas}/>
      <div className={classes.Main}>
        <MenuContainer canvas={canvas}/>
        <Canvas setCanvas = {setCanvas} canvas={canvas}/>
      </div>
    </div>
  );
}

export default App;
