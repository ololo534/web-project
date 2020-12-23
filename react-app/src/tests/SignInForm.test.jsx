import React from 'react';
import {act} from "react-dom/test-utils";
import SignInForm from "../pages/login/SignInForm";
import {render} from '@testing-library/react'

describe('Sign In Form component', () =>{
    let container  = null;

    it('has a form', () =>{
        container = document.createElement("body");
        act(() => {
            render(<SignInForm/>, container);
        })
        const form = container.getElementsByTagName('form');
        expect(form).toBeTruthy();
    })

    it('has a button', () =>{
        const {getByRole} = render(<SignInForm/>);
        const element = getByRole('button');
        expect(element).toBeInTheDocument();
    })

    it('has a link', () =>{
        const {getAllByRole} = render(<SignInForm/>);
        const element = getAllByRole('link');
        expect(element).toBeTruthy();
    })

    it('has a textbox', () =>{
        const {getAllByRole} = render(<SignInForm/>);
        const element = getAllByRole('textbox');
        expect(element).toBeTruthy();
    })
})
