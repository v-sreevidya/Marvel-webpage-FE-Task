import React, { useState, useEffect } from 'react';

const ImageUploader = () => {
    const [name, setName] = useState('');
    const [imageData, setImageData] = useState(null);
    const [displayOrder, setDisplayOrder] = useState(1);
    const [images, setImages] = useState([]);

    // Function to handle image upload
    const addImage = async () => {
        if (!imageData) {
            alert('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('imageData', imageData);  
        formData.append('displayOrder', displayOrder);

        const response = await fetch('http://localhost:8080/api/images/add', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
        } else {
            const error = await response.text();
            console.log('Error:', error);
        }
    };

    
    const fetchImages = async () => {
        const response = await fetch('http://localhost:8080/api/images/');
        if (response.ok) {
            const data = await response.json();
            setImages(data);
        } else {
            console.log('Error fetching images');
        }
    };

    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageData(file);
        }
    };

    
    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div>
            <h2>Image Uploader</h2>

            <div>
                <input
                    type="text"
                    placeholder="Enter image name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Display Order"
                    value={displayOrder}
                    onChange={(e) => setDisplayOrder(parseInt(e.target.value))}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <button onClick={addImage}>Upload Image</button>
            </div>

            <h3>Uploaded Images</h3>
            <ul>
                {images.map((image, index) => (
                    <li key={image.id}>
                        <p>Name: {image.name}</p>
                        <p>Order: {image.displayOrder}</p>
                        <img
                            src={`data:image/jpeg;base64,${image.imageData}`} 
                            alt={image.name}
                            style={{ width: '100px', height: '100px' }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageUploader;
