var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',() =>{
    beforeEach(()=>{
        localStorage.removeItem('todos')
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', ()=> {
        it('shoud set valid todos array', ()=> {
            var todos = [{
                id: 34,
                test: 'test text',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('shoud not set invalid todos array', ()=>{
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);

             expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', ()=> {
        it('should return empty array for bad localStorage', ()=>{
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('shoud return todo if valid array in localStorage', ()=>{
            var todos = [{
                id: 34,
                test: 'test text',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    })
});