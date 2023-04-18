import React, { useState } from "react";
import Avatar from "../components/Avatar";


const UserPage = () => {
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {
          // handle image upload here
          console.log('Image upload successfully.');
          console.log('image: ' + image);
        }
    };

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '100ox'}}>
                <div style={{ gridColumn: "1 / 2"}}>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        {/* Red square need to be replaced with icon*/}
                        <div style={{width: "20px", height: "20px", margin: "5px", backgroundColor: "red"}}></div>
                        <span style={{fontFamily: 'Inter', fontStyle: "italic", fontSize: '20px'}}>PokemonGAI</span>
                    </div>
                </div>
                <div style={{ gridColumn: "2 / 3", justifySelf: "end"}}>
                    <button style={{ border: 'none', color: 'black', backgroundColor: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}>Logout</button>
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'}}>
                <div style={{ gridColumn: "1 / 2", justifySelf: "center"}}>
                    <form onSubmit={handleSubmit}>
                        <Avatar setImage={setImage} />
                        <button type="submit">Confirm</button>
                    </form>
                </div>
                <div style={{ gridColumn: "2 / 6"}}>

                </div>
            </div>

        </div>
    )
}

export default UserPage;