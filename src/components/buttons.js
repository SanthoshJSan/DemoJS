import React from "react";
const Axios=require('axios');


//for other buttons except read.
export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={display:"none"};
    }

    onClickHandler=()=>{
        if(this.state.display==="none")
        this.setState({display:"block"})
        else 
        this.setState({display:"none"})
    }

    onSub=(ev)=>{

        ev.preventDefault();
        var data={name:ev.target.name.value,age:ev.target.age.value};
       console.log(data);


       if(this.props.name==="Create"){
        Axios.post("/",data).then((res)=>{
           console.log("success");},
       (error)=>{
           console.log("error");
       })}


       else if(this.props.name==="Update"){
        Axios.put("/",data).then((res)=>{
           console.log("success");
       },
       (error)=>{
           console.log("error");
       })}


       else if(this.props.name==="Delete"){
        Axios.delete("/",{data:data}).then((res)=>{
           console.log("success");
       },
       (error)=>{
           console.log("error");
       })}
    }

    render(){
        var style={
            width:"200px",
            height:"30px",
            margin:"auto"
        }
        return(
            <div style={{margin:"20px"}}>
            <button style ={style} onClick={this.onClickHandler}>
                {this.props.name}
            </button>
            <div style={this.state}>
            <form onSubmit={this.onSub} ><br/>
                <label > Name: </label><input type="text" name="name" /><br/><br/>
                <label > Age: </label><input type="number" name="age" /><br/><br/>
                <input type="submit"/><br/><br/>
                <p style={{display:"none"}}></p>
            </form>
            </div>
            </div>
        )
    }

}




//for read button
export class Read extends React.Component{
    
    constructor(props){
        super(props); 
        this.state={d:[{}]}      
    }

    
    onsub=(e)=>{
          e.preventDefault();
          Axios.get("/").then((res)=>{
             this.setState({d:res.data});
              console.log(this.state.d);
          },
          (error)=>{
              console.log("error");
          })
      }
    render(){
        var style={
            width:"200px",
            height:"30px",
            margin:"auto"
        }
        var da=this.state.d;
        
        return(
            <div style={{margin:"20px"}}>
            <form onSubmit={this.onsub}>
            <button style ={style} >
                {this.props.name}
            </button>
            </form>
            <div >
               <ol>
                   {
                      
                   da.map(function(item,index){
                       if (typeof item.name === "undefined")
                       return 
                       else
                       return <li key={index}>{item.name},{item.age}</li>
                       } )
                    }
               </ol>
            </div>
            </div>
        )
    }
    

}