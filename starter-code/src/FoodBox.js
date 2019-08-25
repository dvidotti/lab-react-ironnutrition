
import React, {Component } from 'react';





class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleSubmit = (event) =>  {
  event.preventDefault();
  const amount = this.state.value;
  const {name, calories, image } = this.props.data;
  this.props.addFoodSide(name, calories, amount)
}

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const {name, calories, image } = this.props.data;
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <form onSubmit={this.handleSubmit} >
                <div className="control">
                  <input
                    onChange={(e)=> this.handleChange(e)}
                    className="input"
                    type="number" 
                    name="amount"
                    value={this.state.value}
                  />
                </div>
                <div className="control">
                  <button type="submit"  className="button is-info">
                    +
                  </button>
                </div>

              </form>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox;
