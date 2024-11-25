import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import './Image.css';

const Image = () => {
   const UploadImage = () => {
    const file = document.getElementById("file").files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const image = reader.result;
      document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    
    };
    }

    return (
        <div className="image">
            <Sidebar />
            <Header/>
            <div className="image-content">
        <h2>Please Upload an Image</h2>
        <p>This image will be set as Background</p>
        <input type="file" name="file" id="file" />
        <button onClick = {UploadImage} className="upload-btn">Upload</button>
        </div>
        </div>
    );
    };

export default Image;