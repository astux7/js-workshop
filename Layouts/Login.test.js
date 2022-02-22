import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react-native';

 import Login from './Login'

 describe("Test Login Screen is shown ", () =>  {
     it("It shows the Login screen", () => {
        const {getByText} = render(<Login />);

        const title = getByText("Welcome to YourMovies!")

        expect(title).toBeDefined();
    });

    it("calls functions when user logs in", () => {
        const mockedLoginFunction = jest.fn();
        const email = 'asta@sky.uk';
        const password = "password";

        const {getByTestId} = render(<Login loginFunc={mockedLoginFunction} />);

        const emailInput = getByTestId('email_input');
        const passwordInput = getByTestId('password_input');
        const button = getByTestId('login_button');

        fireEvent.changeText(emailInput, email);
        fireEvent.changeText(passwordInput, password);
        fireEvent.press(button);

        expect(mockedLoginFunction).toBeCalled();
        expect(mockedLoginFunction).toBeCalledWith({email, password});
        

    });


 });
