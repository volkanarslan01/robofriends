 import React,{Component}  from 'react';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';
import CardList from './CardList.js';


class App extends React.Component {
    
    constructor(){
    super()
    this.state = {
    robots: robots,
    searchField: ''
    }
    }
    onsearchChange = (event) => {
    this.setState({searchField: event.target.value})
 
    }
    render() {
           const robotsFilter = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            });
        return (
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange= {this.onsearchChange}/>
            <CardList robots = {robotsFilter}/>
            </div>
         );
    }

}
export default App;

