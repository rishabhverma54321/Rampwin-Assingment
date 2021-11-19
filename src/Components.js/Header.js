// import { Alert } from 'bootstrap';
import React, { Component } from 'react'
import '../App.css'
// import { Popup } from 'semantic-ui-react';

import { fetch } from './fetch'
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            sizes:null,
          name:"",
          type:"",
          type1:"",
          text2:"",
          text3:"",
          link:"",
          data1:""
        }   
        
     this.state2={
       finaldata:""
     }
        this.handleclick = this.handleclick.bind(this);
        }




      newobj = [{"text":"","text":"" ,"text": ""}];

    Changestyle=()=>{
        
    }

    handleclick(index){
    const click = index.target.value;
    if(this.state.name==""){
     document.getElementById("hidden").style.display="block"
    this.setState({
        name:click,
    })}else{
      { window.location.reload()}
    }
       
    }

    getitem=(value)=>{
      var get =value.target.files[0]
      if(get.type.includes("pdg"||"docs"||"txt")){
        this.setState({
          format:"Document"
        })
      }else if(get.type.includes("mp4","mkv","avi")){
        this.setState({
          format:"video"
        })
      }else{
        this.setState({
          format:"text"
        })
      }
        if(value.target.id==="document"){
        get =value.target.files[0]
        if(get.size>5000000){
          this.setState({
            sizes:<p style={{width:"200%"}} className="alert"><i class="fas fa-times"></i>   Select a file less then 2Mb   <i class="fas fa-times"></i></p>
          })
        }else{
        let reader = new FileReader();
        reader.onload=()=>{
          var dataURL = reader.result;

          this.setState({
              link:dataURL,
            sizes:<p style={{width:"200%",color:"green"}} className="alert"><i class="far fa-check-circle"></i> Uploaded sucessfully!</p>

          })
        }
        reader.readAsDataURL(get);
        }
    }else if(value.target.id==="video"){
        get =value.target.files[0]
        if(get.size>10000000){
          this.setState({
           sizes:<p style={{width:"200%"}} className="alert"><i class="fas fa-times"></i>   Select a file less then 10Mb   <i class="fas fa-times"></i></p>
          })
        }else{
        let reader = new FileReader();
        reader.onload=()=>{
          var dataURL = reader.result;

          this.setState({
              link:dataURL,
            sizes:<p style={{width:"200%",color:"green"}} className="alert"><i class="far fa-check-circle"></i> Uploaded sucessfully!</p>

          })
        }
        reader.readAsDataURL(get);
        }
    }
      }


 olddata=()=>{
   
        let jsondata = JSON.parse(localStorage.getItem("state"))
          const   data = {
                "template": {
                    "name": this.state.name,
                    "language": {
                        "policy": "deterministic",
                        "code": "id"
                    },
                    "components": [
                        {
                            "type": "body",
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": this.state.text1
                                },
                                {
                                    "type": "text",
                                    "text": this.state.text2
                                },
                                {
                                    "type": "text",
                                    "text": this.state.text3
                                },
                            ]
                        },
                        {
                            "type": "header",
                            "parameters": [
                                {
                                    "type": this.state.format,
                                    "image": {   "link": this.state.link.substring(0,100)
                                  }
                              }
                          ]
                      }
                  ]
              }
              
          }

        console.log("Here is your data -> -> -> ->")
          console.log( jsondata)
        
      return(jsondata)
    
      
      }

  handlebuttonClick=()=>{
        document.getElementById("finaldata").style.display="block"
      }

      handlebuttonOut=()=>{
        document.getElementById("finaldata").style.display="none"

      }     
      
saveStateToLocalStorage=()=>{
  localStorage.setItem('state', JSON.stringify(this.state));
  this.handlebuttonClick()
  this.handlebuttonOut()
  this.olddata()
}

    render() {

        const template = fetch.templates
        const name = template.map((value,index)=>{
           return( value.name)
        })

         const components = template.map((temp , index)=>{
             return (temp.components)
         })
       for(let i=0; i<=name.length; ++i){
         if(this.state.name===name[i]){
           var map3 = components[i]
           break;
         }else{
          map3 = this.newobj
         }
        }
// value returns from herer 

 return (
     <form className="Max-height">
            <div className= "main">
                <div className="dropdown-header">
                    <h1>Template</h1>
                   
                    <select required onClick={this.Changestyle} onChange={this.handleclick} placeholder="select"  className="dropdown-template" >
                       <option className="optiontag" disabled selected hidden value="select" >   Select your template - </option>
                        {   
                            template.map((temp,index)=>(
                            <option required className="optiontag" >{temp.name}</option>
                           ))
                            }
                    </select>
                </div>

{/* Header starts from here  */}
  <div id="hidden" style={{display:"none"}}>

        <div className="dropdown-header2">
                    <h1>Template Header</h1>
         {   map3.map((temp)=>{

                if(temp.type==="HEADER" && temp.format==="TEXT"){
                     
                    return(<div className="dropdown-header1" >{temp.text}</div>)}
                else if(temp.type==="HEADER" && temp.format==="DOCUMENT"){
                
                    return( <div className="drop-style">
                        <h3 className="uploadimage">Document (Required)</h3>
                        <label className="input-button"> <i class="fas fa-upload"></i> Choose file <input required id="document" onChange={this.getitem} accept={[".docx",".doc",".txt",".pdf"]} type="file"/></label>
                            {this.state.sizes}</div>
                           
                          )}
                else if(temp.type==="HEADER" && temp.format==="VIDEO"){
                    return( <div className="drop-style">
                          <div className="uploadimage"> upload Video (Required)</div>
                        <label className="input-button"> <i class="fas fa-upload"></i> Choose video <input required id="video" onChange={this.getitem} accept={[".avi",".mp4",".mkv",".avi"]} type="file"/></label>
                            {this.state.sizes}
                          </div>
                          )}
                          }
                           )}
        </div>

{/* Body starts from here  */}

                <div className="dropdown-header2">
                    <h1>Template Body</h1>
              {     map3.map((temp)=>{
                  if(temp.type==="BODY"&& temp.text.includes("{{3}}")){
                   return(
                       <>
                       <div className="dropdown-header1" >{temp.text}</div>
                       <div className="dropdown-placeholder">
                        <h3>Placeholder{1}</h3>
                        <input  placeholder="placeholder{1}" onChange={(e)=>this.setState({type:temp.type, text1:e.target.value})} id="text1"   type="text" required></input>
                       </div>
                       <div className="dropdown-placeholder">
                        <h3>Placeholder{2}</h3>
                        <input  placeholder="placeholder{2}"  onChange={(e)=>this.setState({type:temp.type, text2:e.target.value })} id="text2"  type="text" required></input>
                       </div>
                       <div className="dropdown-placeholder">
                        <h3>Placeholder{3}</h3>
                        <input  placeholder="placeholder{3}" onChange={(e)=>this.setState({type:temp.type, text3:e.target.value})} id="text3"  type="text" required></input>
                       </div>
                       </>
                        )
                  } else if(temp.type==="BODY"&& temp.text.includes("{{2}}")){ 
                      return(
                      <>
                    <div className="dropdown-header1" >{temp.text}</div>
                       <div className="dropdown-placeholder">
                        <h3>Placeholder{1}</h3>
                        <input placeholder="placeholder{1}" onChange={(e)=>this.setState({text1:e.target.value, type:temp.type})} id="text4" type="text" required></input>
                       </div>
                       <div className="dropdown-placeholder">
                        <h3>Placeholder{2}</h3>
                        <input placeholder="placeholder{2}" onChange={(e)=>this.setState({text2:e.target.value, type:temp.type})} id="text5" type="text" required></input>
                       </div>
                       </>
                      )
                  }
                  else if(temp.type==="BODY"&& temp.text.includes("{{1}}")){
                      return(
                      <>
                    <div className="dropdown-header1">{temp.text}</div>
                       <div className="dropdown-placeholder">
                        <h3>Placeholder{1}</h3>
                        <input placeholder="placeholder{1}" onChange={(e)=>this.setState({text1:e.target.value, type:temp.type})} id="input6" type="text" required></input>
                       </div>
                       </>
                      )
                  }
                   }
                    )}
                </div>
{/* Footer starts from here                  */}

                <div className="dropdown-header2">
                    <h1>Template Footer</h1>
              {     map3.map((temp)=>{
                  if(temp.type==="FOOTER"){
                    return(<div className="dropdown-header1" >{temp.text}</div>)
                  }
              }
                    )}
                </div>
          <button type="submit" className="submitbutton" onClick={this.saveStateToLocalStorage}>Submit</button>
           </div>
           <div onMouseOut={this.handlebuttonOut} onMouseOver={this.handlebuttonClick} style={{color:"#71C9CE", cursor:"pointer",display:"block",padding:"10px",float:"right"}}  onChange={this.olddata}> <i class="fas fa-arrow-down"></i> Your file is here <i class="fas fa-arrow-down"></i></div>
           <div id="finaldata" style={{display:"none", marginTop:"20px",}} >{JSON.stringify(this.olddata())}</div>
            </div>
            </form>
        )
    }
}
