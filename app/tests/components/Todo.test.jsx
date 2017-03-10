var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');


var Todo = require('Todo');

describe('Todo', () =>{
    it('should exist', () => {
        expect(Todo).toExist();
    });
    
    it('shoud call onToggle prop with on click', () => {
        var todoData = {
            id: 12,
            text: 'Todo',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(12);
    })
});