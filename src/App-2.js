import React, { useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css"



function DynamicHooksObjectFormat(initialState) {
    const [value, setValue] = useState(initialState);

    function onChange(e) {
        setValue(e.target.value);
    }

    function clearInput() {
        setValue("");
    }

    return { value, onChange, clearInput };
    }

    //-------------------------------------------------Login Field App
    function App2() {
    function handleOnSubmit(e) {
        e.preventDefault();
        console.log(usernameValue);
        console.log(emailValue);
        console.log(passwordValue);
        usernameClearInput();
        emailClearInput();
        passwordClearInput();
    }

    const {
        value: usernameValue,
        onChange: usernameOnChange,
        clearInput: usernameClearInput,
    } = DynamicHooksObjectFormat("");
    const {
        value: emailValue,
        onChange: emailOnChange,
        clearInput: emailClearInput,
    } = DynamicHooksObjectFormat("");
    const {
        value: passwordValue,
        onChange: passwordOnChange,
        clearInput: passwordClearInput,
    } = DynamicHooksObjectFormat("");
    
    return (
        <div 
            className="App"
        >
        <form 
            class="
            container 
            mx-auto
            box-border 
            md:box-content 
            md:py-8
            p-8 
            "
        
            onSubmit={handleOnSubmit}
            >
            <div>
            <input //-------------------------------------- username field
                type="text"
                name="username"
                value={usernameValue}
                placeholder="username"
                onChange={usernameOnChange}
                class="form-input px-4 py-3 rounded-full"
            />
            </div>

            <div>
            <input //-------------------------------------- email field
                type="email"
                name="email"
                value={emailValue}
                placeholder="email"
                onChange={emailOnChange}
                class="form-input px-4 py-3 rounded-full"
            />
            </div>
            <div>
            <input //-------------------------------------- password field
                type="password"
                name="password"
                value={passwordValue}
                placeholder="password"
                onChange={passwordOnChange}
                class="form-input px-4 py-3 rounded-full "
            />
            </div>
            <div>
            <button //-------------------------------------- submit button
                type="submit"
                class="text-center sm:text-left p-3 cursor-pointer"
                    > Submit
            </button>
            </div>
        </form>
        </div>
    );
}

export default App2;