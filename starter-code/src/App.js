import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from '../src/FoodBox'
import foods from './foods.json'
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodsList: foods,
      filteredFood: 0,
      flag: true,
      addfood: false,
      value: 1,
      todayfood: []
    }
  this.addForm = this.addForm.bind(this); 
  this.addFoodSide = this.addFoodSide.bind(this); 
  }

    addFood = (theFood) => {
    const foodCopy = [...this.state.foodsList];
    foodCopy.unshift(theFood);
    console.log(theFood, '######', foodCopy)
    this.setState({
      foodsList: foodCopy
    })
  }

  

    filterFood = (event) => {
     let { value } =  event.target;
      let foodFiltered = this.state.foodsList.filter(food => {
        if(food.name.toUpperCase().slice(0, value.length) === value.toUpperCase()){
          return food;
        }
      });
      this.setState({
        filteredFood: foodFiltered
      })
      if(value.length !== 0) {
        this.setState({flag:false})
      } else this.setState({flag: true})
    }

    addForm() {
      this.setState({
        addfood: !this.state.addfood
      })
    }

    addFoodSide(name, calories, amount) {
      console.log(name, calories, amount);
      const todayFood = [...this.state.todayfood];
      if (todayFood.length === 0) {
        console.log('ENTROU NO [] VAZIO')
        todayFood.push({
          name: name,
          calories: calories,
          amount: amount
        })
      } else {
        for (let i = 0; i < todayFood.length; i += 1) {
          if( todayFood[i].name === name){ 
            todayFood[i].calories += calories;
            todayFood[i].amount += amount;
          } 
        } 
        let ctrArr = []
        for (let z = 0; z < todayFood.length; z +=1) {
          ctrArr.push(todayFood[z].name)
          console.log('------------->',ctrArr, name)
        }
          if (!ctrArr.includes(name)) {
                todayFood.push({
                name: name,
                calories: calories,
                amount: amount
              })
          }  
      } this.setState({ todayfood: todayFood})  
    }

    

  render() {
    console.log(this.state.todayfood)
    if(this.state.flag === true) {
     return( 
     <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <section className="container">
          <div className='list'>
              <form className="food-form-find">
                <label id="find-food-title" for="name">Find Food</label>
                <input type="text" name="name" onChange={(e) => this.filterFood(e)}/>
              </form>
          
            <button id="add-food-button" onClick={this.addForm}> ADD FOOD </button>
            { (this.state.addfood)? <Form addTheFood={this.addFood}/>: <hr></hr> }
            
            {this.state.foodsList.map((e, idx) => {
            return  <FoodBox value={this.state.value} addFoodSide={this.addFoodSide} data={e} key={idx} /> 
          })}
          </div>
        
          <aside>
            <h1> TODAY FOOD: </h1>
            {this.state.todayfood.map((e, idx) => {
              return (
                <li key={idx}>{e.name} {e.amount} {e.calories}</li>
              )
            })}
            
            <li>TOTAL: {this.state.todayfood.reduce((acc, item) => item.calories + acc, 0)} </li>
          </aside>
        </section>
      </div>
     )
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <section className="container">
          <div className='list'>
              <form>
                <input type="text" name="name" onChange={(e) => this.filterFood(e)}/>
              </form>
          
            <button onClick={this.addForm}> ADD FOOD </button>
            { (this.state.addfood)? <Form addTheFood={this.addFood}/>: <hr></hr> }
          
            {this.state.filteredFood.map((e, idx) => {
            return  <FoodBox data={e} key={idx} /> 
          })}
          </div>
        
          
      </section>
      </div>
    );
  }
}

export default App;
