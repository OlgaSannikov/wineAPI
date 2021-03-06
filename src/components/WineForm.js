import React from "react";
import axios from "axios";
import "./components.css";


class WineForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
             name:"",
             year:"",
             grapes:"",
             country:"",
             region: "",
             pictureURL:"",
             price: "",
             description: ""
          }
          this.nameHandler=this.nameHandler.bind(this);
          this.pictureURLHandler=this.pictureURLHandler.bind(this);
          this.yearHandler=this.yearHandler.bind(this);
          this.grapesHandler=this.grapesHandler.bind(this);
          this.countryHandler=this.countryHandler.bind(this);
          this.regionHandler=this.regionHandler.bind(this);
          this.priceHandler=this.priceHandler.bind(this);
          this.descriptionHandler=this.descriptionHandler.bind(this);
          this.submitButton=this.submitButton.bind(this);
        }
          nameHandler(event) {
            this.setState({name: event.target.value});
            event.preventDefault();
          }
          pictureURLHandler(event) {
            this.setState({pictureURL: event.target.value});
            event.preventDefault();
          }
          yearHandler(event) {
            this.setState({year: event.target.value});
            event.preventDefault();
          }
          grapesHandler(event) {
            this.setState({grapes: event.target.value});
            event.preventDefault();
          }
          countryHandler(event) {
            this.setState({country: event.target.value});
            event.preventDefault();
          }
          regionHandler(event) {
            this.setState({region: event.target.value});
            event.preventDefault();
          }
          priceHandler(event) {
            this.setState({price: event.target.value});
            event.preventDefault();
          }
          descriptionHandler(event) {
            this.setState({description: event.target.value});
            event.preventDefault();
          }
      submitButton(event){
        event.preventDefault();
        axios.post(`http://myapi-profstream.herokuapp.com/api/466840/wines`,this.state)
        .then(res => {
          console.log(res);
      })
      .catch(e => {console.log(e);}) 
      }
        render(){
          return (
          <div>
           <form onSubmit={this.submitButton}>
              <div className="form">
                <p>Enter wine name</p>
                <input type='text' value= {this.state.name} onChange={this.nameHandler} placeholder="wine name"/>
              </div>
              <div className="form">
                <p>Enter wine url link</p>
                <input type='text' value= {this.state.pictureURL} onChange={this.pictureURLHandler} placeholder="picture url"/>
              </div>
              <div className="form">
                <p>Enter year</p>
                <input type='text' value= {this.state.year} onChange={this.yearHandler} placeholder="year"/>
              </div>
              <div className="form">
                <p>Enter type of grapes</p>
                <input type='text' value= {this.state.grapes} onChange={this.grapesHandler} placeholder="grapes type"/>
              </div>
              <div className="form">
                <p>Enter contry of origin</p>
                <input type='text' value= {this.state.country} onChange={this.countryHandler} placeholder="country"/>
              </div>
              <div className="form">
                <p>Enter region of origin</p>
                <input type='text' value= {this.state.region} onChange={this.regionHandler}  placeholder="region"/>
              </div>
              <div className="form">
                <p>Enter price of wine</p>
                <input type='text' value= {this.state.price} onChange={this.priceHandler}  placeholder="price"/>
              </div>
              <div className="form">
                <p>Enter wine description</p>
                <input type='text' value= {this.state.description} onChange={this.descriptionHandler}  placeholder="description"/>
                <input type="submit" />
              </div>
           </form>
          </div>
        );
        }
      }
      
      export default WineForm;