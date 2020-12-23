import React from 'react';
import {act} from "react-dom/test-utils";
import RegisterForm from "../pages/registration/RegisterForm";
import {render} from '@testing-library/react'

describe('Register Form component', () =>{
    let container  = null;

    it('has a form', () =>{
        container = document.createElement("body");
        act(() => {
            render(<RegisterForm/>, container);
        })
        const form = container.getElementsByTagName('form');
        expect(form).toBeTruthy();
    })

    it('has a button', () =>{
        const {getByRole} = render(<RegisterForm/>);
        const element = getByRole('button');
        expect(element).toBeInTheDocument();
    })

    it('has a link', () =>{
        const {getAllByRole} = render(<RegisterForm/>);
        const element = getAllByRole('link');
        expect(element).toBeTruthy();
    })

    it('has a textbox', () =>{
        const {getAllByRole} = render(<RegisterForm/>);
        const element = getAllByRole('textbox');
        expect(element).toBeTruthy();
    })
})
