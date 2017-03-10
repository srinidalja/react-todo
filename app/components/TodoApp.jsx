var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'clearn the yard',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'feed the cat',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'take children to school',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'go to bank',
                    completed: true
                }
            ]
        };
    },
 
    handleAddTodo: function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    },

    handleToggle: function(id){
        var updateTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updateTodos});
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
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;