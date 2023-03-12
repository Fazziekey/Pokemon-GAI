import React, {useState} from "react";

interface RegisterProps {
    onSubmit: (name: string, password: string, email: string) => void;
}

const Register = ({onSubmit}: RegisterProps) => {
    // Register form component. It takes in a "onSubmit" function prop which will
    // be called when the user submits the form.

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, password, email);  // A callback function to pass data to parent component.
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '400px', height: '400px', border: '1px solid black', padding: '20px', backgroundColor: 'white' }}>
            <label>
                Enter the NAME for a Pokemon trainer
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {/* Red square need to be replaced with icon*/}
                    <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                    <input type="name" value={name} onChange={handleNameChange} />
                </div>
            </label>
            <br />
            <label>
                Enter your PASSWORD
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {/* Red square need to be replaced with icon*/}
                    <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
            </label>
            <br />
            <label>
                Enter your EMAIL for contact
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {/* Red square need to be replaced with icon*/}
                    <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                    <input type="email" value={email} onChange={handleEmailchange} />
                </div>
            </label>
            <button type="submit">CONFIRM</button>
        </form>
    );
};

export default Register;