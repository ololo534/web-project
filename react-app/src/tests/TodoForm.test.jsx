import React from 'react';
import {render} from '@testing-library/react'
import TodoForm from "../pages/main/TodoForm";

describe('TodoForm Form component', () =>{

    it('has a button', () =>{
        const {getByRole} =
            render(<TodoForm
                        clearErrors={function (){}}
                        createTodoItem={function (){}}
                        handleErrors={function (){}}
                   />
            );
        const element = getByRole('button');
        expect(element).toBeInTheDocument();
    })

    it('has a textbox', () =>{
        const {getByRole} = render(<TodoForm
                clearErrors={function (){}}
                createTodoItem={function (){}}
                handleErrors={function (){}}
            />
        );
        const element = getByRole('textbox');
        expect(element).toBeInTheDocument();
    })

})
