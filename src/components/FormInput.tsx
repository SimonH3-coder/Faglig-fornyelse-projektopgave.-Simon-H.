import { useState } from "react";
export function FormInput() {
    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState("");
    const [email, setEmailError] = useState("");

    // Ændringer af tekstinput
    const valiateInput = (value: string) => {
        if (value.length === 0) {
            setInputError ("Der skal mindst indtastes mindst et tegn")
        } else if (value.length <= 6) {
            setInputError ("Der skal indtastes mindst seks tegn")
        } else {
            setInputError("")
        }
    }
// Ændringer af emailinput
const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length === 0) {
        setEmailError("Der skal indtastes en email")
    } else if (!emailRegex.test(value)) {
        setEmailError("Der skal indtastes en email der kan anvendes")
    } else {
        setEmailError("")
    }
}

    return (
        <div>
        <div>
            <label>
                Indtast tekst (mere end seks tegn)
                <input type="text"  value={input} onChange={(e) => setInput(e.target.value)
                    validateInput(e.target.value)
                }} />
                
            </label>
            {inputError && <div style={{ color: "red"}}>{inputError}</div>}
        </div>
        <label>
            Indtast email:
            <input
                type="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                }}
                />

        </label>
        {emailError && <div style={{ color: "red"}}>{emailError}</div>}
        </div>
        )
    }



    