import React from "react";
import DynamicHooksArrayFormat from "./hooks/inputHooks";
import "./App.css";
import "tailwindcss/tailwind.css"


//-------------------------------------------------Login Field
function App1() {
    const [ 
        username, 
        usernameValue, 
        usernameOnChange, 
        usernameClearInput
    ] =
        DynamicHooksArrayFormat("");

    const [ 
        email, 
        emailValue, 
        emailOnChange, 
        emailClearInput
    ] =
        DynamicHooksArrayFormat("");

    const [ 
        password, 
        passwordValue, 
        passwordOnChange, 
        passwordClearInput
    ] =
        DynamicHooksArrayFormat("");

    function handleOnSubmit(e) {
        e.preventDefault();
        usernameValue();
        emailValue();
        passwordValue();
        usernameClearInput();
        emailClearInput();
        passwordClearInput();
    }
    
    return (
        <>
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
                        value={username.value}
                        placeholder="username"
                        onChange={usernameOnChange}
                        class="form-input px-4 py-3 rounded-full"
                    />
                </div>

                <div>
                    <input //-------------------------------------- email field
                        type="email"
                        name="email"
                        value={email.value}
                        placeholder="email"
                        onChange={emailOnChange}
                        class="form-input px-4 py-3 rounded-full"
                    />
                </div>
                
                <div>
                    <input //-------------------------------------- password field
                        type="password"
                        name="password"
                        value={password.value}
                        placeholder="password"
                        onChange={passwordOnChange}
                        class="form-input px-4 py-3 rounded-full"
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
        </>
    );
}


export default App1;