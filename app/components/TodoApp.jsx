var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id: 2,
                    text: 'clearn the yard'
                },
                {
                    id: 3,
                    text: 'feed the cat'
                },
                {
                    id: 4,
                    text: 'take children to school'
                },
                {
                    id: 5,
                    text: 'go to bank'
                }
            ]
        };
    },
 
    handleAddTodo: function(text){
        alert('new todo ' + text);
    },

    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowercase()
        });
    },

    render: function(){
        var {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;