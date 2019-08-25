import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = { 
      name: '',
      calories: '',
      image: '',
      quantity: '1',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleNameInput = this.handleNameInput.bind(this);
    // this.handleCaloriesInput = this.handleCaloriesInput.bind(this);
    // this.handleImages = this.handleImages.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({     
      name: '',
      calories: '',
      // image: ''
    })     
  }

  handleInput(event) {
    let {value} = event.target;
    let title = event.target.name
    this.setState({
      [title]: value
    })
  }

  render(){
    return (
      <div>
        <form className="add-food" onSubmit={this.handleFormSubmit}>
            <label className="form-label">Name:</label>
            <input className="form-input" type="text" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)} />
            <label className="form-label">Calories:</label>
            <input className="form-input" type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleInput(e)} />
            <input className="form-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;