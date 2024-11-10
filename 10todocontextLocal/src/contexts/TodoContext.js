import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todo: {
        id: 1,
        todo: "todo massage",
        complete: false
    },


    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    useContext(TodoContext);
}