"use client";

import "lightbox2/dist/css/lightbox.css"
import { useEffect } from "react";
import { useState } from "react";
import { useFormState } from "react-dom";

const LightboxGallery = ({images, imageStyle}) => {

    const [lightboxJS, setLightboxJS] = useState();

    useEffect(() => {

        if (typeof window !== "undefined"){
            require("../../node_modules/lightbox2/dist/js/lightbox-plus-jquery.js");
        }
    }, []);

    return (
        <div className="gallery" >
            {images.map((img, index) => (
                <a
                    key={index}
                    href={img.src}
                    data-lightbox="gallery"
                    data-title={img.title}
                >
                    <img src={img.src} alt={img.title} width={imageStyle.maxWidth} height={imageStyle.maxHeight}/>
                </a>
            ))}
        </div>
    )
}

export default LightboxGallery;