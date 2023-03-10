import React, {useState} from "react";

interface LoginProps {
    onSubmit: (email: string, password: string) => void;
}

const Login = ({onSubmit}: LoginProps) => {
    // Login form component. It takes in a "onSubmit" function prop which will
    // be called when the user submits the form.

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);  // A callback function to pass data to parent component.
    };

    const handleEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
         alignItems: 'center', width: '400px', height: '400px', border: '1px solid black', padding: '20px', backgroundColor: 'white' }}>
            <label>
                Email:
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {/* Red square need to be replaced with icon*/}
                    <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                    <input type="email" value={email} onChange={handleEmailchange} />
                </div>
            </label>
            <br />
            <label>
                Password:
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {/* Red square need to be replaced with icon*/}
                    <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
            </label>
            <br />
            <button type="submit">CONFIRM</button>
        </form>
    );
};

export default Login;