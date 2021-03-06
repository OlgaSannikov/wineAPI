import React from "react";
import axios from "axios";

class AllWines extends React.Component{
constructor(props){
    super(props);
    this.state={
        wines: null
    }
}
async getWineList(){

    try{
        const list= await axios.get(`http://myapi-profstream.herokuapp.com/api/466840/wines`)
        this.setState({wines: list.data});
    }
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.getWineList();
}
notNull(){
    if (this.state.wines===null){
        return "wine not find";
    }
    else {
        let wines=this.state.wines.map((response,index)=>{
            return (<div id={index}>
             <h3 id={index+"15"} >{response.name}</h3>
             <img id={index+"20"} src={response.picture} alt="wine" />
             </div> )});
             return wines;
    }
}

render(){
        
        return (
                <div>
                    {this.notNull()}
                </div>
        )
    }

}
 
export default AllWines;