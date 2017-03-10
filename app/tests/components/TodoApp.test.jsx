var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todos to todos on handleAddtodo', ()=>{
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('shoud toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'go to maret',
            completed: false
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);        
        expect(todoApp.state.todos[0].completed).toBe(true);
    })
});