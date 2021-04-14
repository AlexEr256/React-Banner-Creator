import React from 'react'
import HeaderComponent from '../Component/HeaderComponent'
import {HeaderModal, HeaderPreview} from '../../redux/actions/HeaderActions'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    headerWrapper:{
        background: `linear-gradient(141deg, rgb(35, 48, 62), rgb(64, 64, 64) 51%, rgb(35, 48, 62) 75%)`,
        width: '100%',
        height:'8%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
    },
    headerText:{
        color: 'rgb(255, 255, 255)',
        fontSize: '35px',
        fontWeight: '500',
        [theme.breakpoints.down('md')]: {
            display:'none',
          },
    },
    Preview:{
        color:'#fff'
    },
    HeaderButtonsWrapper:{
        padding:'0px 50px',
        [theme.breakpoints.down('md')]: {
            padding:'0px 10px',
          },
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'row',
            flexBasis:'48%',
            height: '70%'
        },
    },
    HeaderButton:{
        marginRight:'20px',
        [theme.breakpoints.down('sm')]: {
            marginRight:'5px',
          },
    },
    icon:{
        width:'24px',
        height:'24px'
    }
  }));

 

    function HeaderContainer({canvas, Preview, SetPreview, Modal, SetModal, Url}){

    const classes = useStyles();

    function SaveAsImg(){
        let answer;
        if(Url){
            answer = window.confirm("Warning! Custom image from Internet can cause CORS problem. Do you want to continue this operation?")
        }
        if(!answer){
           return;
        }
        let a = document.createElement('A');
        a.href = canvas.toDataURL({
            format: 'png',
            quality: 0.95
        });
        a.download = 'canvas.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
       
    }

    function ExportAsJSON(){
        let JSONstring = JSON.stringify(canvas);
        navigator.clipboard.writeText(JSONstring);
        SetModal(true);
    }

    function ExportAsSVG(){
        let svg = canvas.toSVG();
        navigator.clipboard.writeText(svg);
        SetModal(true);
    }

    function handleClose(event, reason){
        if (reason === 'clickaway') {
          return;
        }  
        SetModal(false);
      };

    function ChangePreview(e){
        SetPreview(!Preview)
    }


    return(
        <HeaderComponent
            classes = {classes}
            Preview = {Preview}
            ChangePreview = {ChangePreview}
            SaveAsImg = {SaveAsImg}
            ExportAsJSON = {ExportAsJSON}
            ExportAsSVG = {ExportAsSVG}
            Modal = {Modal}
            handleClose = {handleClose}
        />
    )
}

function mapStateToProps(state){
    return{
        Preview: state.HeaderReducer.preview,
        Modal: state.HeaderReducer.modal,
        Url: state.ImageReducer.url
    }
}

function mapDispatchToProps(dispatch){
    return{
        SetPreview: (preview) => dispatch(HeaderPreview(preview)),
        SetModal: (modal) => dispatch(HeaderModal(modal)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)