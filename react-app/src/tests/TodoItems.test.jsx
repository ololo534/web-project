import React from 'react';
import {render} from '@testing-library/react';
import TodoItems from "../pages/main/TodoItems";

describe('TodoItems Form component', () =>{

    it('has a button', () =>{
        const {getByRole} = render(
            <TodoItems
                hideCompletedTodoItems={false}
                toggleCompletedTodoItems={function (){}}
                />
        );
        const element = getByRole('button');
        expect(element).toBeInTheDocument();
    })

    it('is hide items button', () =>{
        const container = render(
            <TodoItems
                hideCompletedTodoItems={false}
                toggleCompletedTodoItems={function (){}}
            />
        );
        const element = container.getByRole('button');
        expect(element.textContent).toBe('Hide Completed Items ');
    })

    it('is not hide items button', () =>{
        const container = render(
            <TodoItems
                hideCompletedTodoItems={true}
                toggleCompletedTodoItems={function (){}}
            />
        );
        const element = container.getByRole('button');
        expect(element.textContent).toBe('Show Completed Items');
    })

    it('has a table', () =>{
        const {getByRole} = render(
            <TodoItems
                hideCompletedTodoItems={false}
                toggleCompletedTodoItems={function (){}}
            />
        );
        const element = getByRole('table');
        expect(element).toBeInTheDocument();
    })

})
