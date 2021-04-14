import React from 'react'
import ImageComponent from '../Component/ImageComponent'
import {connect} from 'react-redux'
import {ImageType, ImageURL} from '../../../redux/actions/ImageActions'
import {fabric} from 'fabric'

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  ImageWrapper:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    
  },
  ChoiceWrapper:{
    display:'flex',
    justifyContent:'center',
  },
  ImageFormControl:{ 
    display:'flex',
    justifyContent:'center',
    margin:'auto'
  },
  FileUploader:{
    width:'80%',
    color:'grey',
    border:'1px dotted black',
    '& Label':{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },    
  },
  FileUploaderLabelIcon:{
    fontSize:'40px'
  },
  FileUploaderLabelText:{
    fontSize:'16px',
    color:'rgba(0, 0, 0, 0.85)',
    fontWeight:'500'
  },
  InputWrapper:{
    width:'70%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  InputFile:{
    width:'100%',
    marginBottom:'15px',
    padding:'10px'
  },
  InputButton:{
    width:'60%',
  }
}));

function ImageContainer({ImageType, SwitchImageType, ImageURL, SetImageURL, canvas, IsImage}){

    const classes = useStyles();

    function handleChange(event){
      SwitchImageType(event.target.value);
    };

    function ChangeUrl(e){
      SetImageURL(e.target.value)
    }

    function GetImage(){
      fabric.Image.fromURL(ImageURL, function(oImg){
        if(oImg){
          canvas.centerObject(oImg);
          if(IsImage){
            canvas.add(oImg);
          }else{
            canvas.setBackgroundImage(oImg);
          }
          canvas.renderAll()
        }
      })
    }
    function UploadFile(e){
      let reader = new FileReader();
          reader.onload = function (event){
            let  imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = function () {
               let image = new fabric.Image(imgObj);
                image.scale(0.8).set({
                  angle: 0,
                  padding: 10,
                  height:image.height,
                  width:image.width,
          });
          canvas.centerObject(image);
          if(IsImage){
            canvas.add(image);
          }else{
            canvas.setBackgroundImage(image);
          }
          canvas.renderAll();
        }
      }
       reader.readAsDataURL(e.target.files[0]);
    }


    return(
        <ImageComponent
            classes = {classes}
            ImageType = {ImageType}
            handleChange = {handleChange}
            UploadFile = {UploadFile}
            ChangeUrl = {ChangeUrl}
            GetImage ={GetImage}
        />
    )
}

function mapStateToProps(state){
  return{
    ImageType: state.ImageReducer.choice,
    ImageURL : state.ImageReducer.url,
    IsImage: state.MapReducer.image
  }
}

function mapDispatchToProps(dispatch){
  return{
    SwitchImageType: (choice) =>  dispatch(ImageType(choice)),
    SetImageURL: (url) => dispatch(ImageURL(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)