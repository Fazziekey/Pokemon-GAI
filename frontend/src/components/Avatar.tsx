import React, { useState } from "react";

interface AvatarProps {
    setImage: (image: File) => void;
}

const Avatar = ({setImage}: AvatarProps) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0];
        if (image) {
            console.log("URL.createObjectURL(image): " + URL.createObjectURL(image));
            setImagePreview(URL.createObjectURL(image));
            console.log("imagePreview: " + imagePreview);
            setImage(image);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", backgroundColor: "grey", cursor: "pointer"}}>
            {imagePreview ? (
                <img src={imagePreview} alt="user profile" />
            ) : (
                <span>Upload Image</span>
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                // style={{ display: "none"}}
            />
        </div>
    );
};

export default Avatar;