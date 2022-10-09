 import React,{Component}  from 'react';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';
import CardList from './CardList.js';


class App extends React.Component {
    
  
    constructor(){
    super()
    this.state = {
    robots: [],
    searchField: ''
    }}
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots: users}));
    }
    onsearchChange = (event) => {
    this.setState({searchField: event.target.value})
 
    }
    render() {
           const robotsFilter = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            });
           if(this.state.robots.length ===0){
            return <h1>Loading...</h1>
           }
           else{
            return (
                <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange= {this.onsearchChange}/>
                <CardList robots = {robotsFilter}/>
                </div>
             );
           }
      
    }

}
export default App;

