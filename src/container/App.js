 import React,{Component}  from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll.js';


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
        const {robots,searchField} = this.state;
           const robotsFilter = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
            });
         // Shorts if-else
            return !robots.length ? <h1>Loading...</h1> :(
                <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange= {this.onsearchChange}/>
                <Scroll>
                <CardList robots = {robotsFilter}/>
                </Scroll>
                </div>
             );
           
      
    }

}
export default App;

