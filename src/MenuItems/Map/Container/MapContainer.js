import React from 'react'
import MapComponent from '../Component/MapComponent'
import {MapSetBackgroundImage, MapColor} from '../../../redux/actions/MapActions'
import { connect } from 'react-redux';




 function MapContainer({canvas, IsImage, SetIsImage, Color, SetColor}){

    React.useEffect(() =>{
      if(canvas){
        canvas.backgroundColor = Color;
        canvas.renderAll();
      }    
    }, [Color, canvas])
   
      function handleChange(event){
        SetIsImage(!IsImage);
      };

      function ClearHandler(){
        canvas.setBackgroundImage(null);
        canvas.renderAll();
      }


    return(
      <MapComponent
          IsImage = {IsImage}
          handleChange = {handleChange}
          ClearHandler = {ClearHandler}
          SetColor = {SetColor}
          Color = {Color}
      />
    )
}

function mapStateToProps(state){
  return{
    IsImage: state.MapReducer.image,
    Color: state.MapReducer.color,
  }
}

function mapDispatchToProps(dispatch){
  return{
    SetIsImage: (flag) => dispatch(MapSetBackgroundImage(flag)),
    SetColor: (color) => dispatch(MapColor(color)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)