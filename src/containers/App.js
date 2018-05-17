import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        //these states come from the reducers
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
            <div className="tc">
                <h1>Loading...</h1>
            </div>
            :
            <div>
                <h1 className="f3 f2-ns f1-l center tc">RoboFriends</h1>
                <SearchBox searchchange={onSearchChange} />
                {robots.length ?
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll> :
                    <strong className="f4 f3-ns f2-l db tc mt3">No results found!</strong>
                }
            </div>

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);