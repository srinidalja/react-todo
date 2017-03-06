var React = require('react');
var TodoList = require('TodoList');
var TodoApp = React.createClass({

    getInitialState: function(){
        return {
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

    render: function(){
        var {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;