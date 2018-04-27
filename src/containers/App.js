import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        this.usersFullList = [];
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.usersFullList = users;
                this.setState({ robots: this.usersFullList })
            })
    }

    onSearchChange = (event) => {
        const q = event.target.value;
        this.setState({ searchfield: q });
        const filteredRobots = this.usersFullList.filter(robot => {
            return robot.name.toLowerCase().includes(q.toLowerCase())
        })
        this.setState({ robots: filteredRobots });
    }

    render() {
        return !this.usersFullList.length ?
            <div className="tc">
                <h1>Loading...</h1>
            </div>:
            <div>
                <h1 className="f3 f2-ns f1-l center tc">RoboFriends</h1>
                <SearchBox searchchange={this.onSearchChange}/>
                { this.state.robots.length ?
                    <Scroll>
                        <CardList robots={this.state.robots}/>
                    </Scroll> :
                    <strong className="f4 f3-ns f2-l db tc mt3">No results found!</strong>
                }
            </div>
        
    }
}

export default App;