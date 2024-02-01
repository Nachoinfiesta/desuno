// MyCard.jsx
import React, { useState } from 'react';

const MyCard = ({ defaultImage, defaultName, defaultDescription }) => {
    const [image, setImage] = useState(defaultImage);
    const [name, setName] = useState(defaultName);
    const [description, setDescription] = useState(defaultDescription);

    return (
        <div className="my-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default MyCard;
