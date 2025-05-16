import React from "react";
import styles from "./button.module.css";
import Image from "next/image";
import Arrow from "../../../../public/images/arrow.svg";

const Button = ({ text, type }) => {
    let buttonStyle = "";

    switch (type) {
        case "whiteButtonWithBackground":
            buttonStyle = styles.whiteButtonWithBackground;
            break;
        case "whiteButtonNoBackground":
            buttonStyle = styles.whiteButtonNoBackground;
            break;
        case "blackButtonWithBackground":
            buttonStyle = styles.blackButtonWithBackground;
            break;
        case "blackButtonNoBackground":
            buttonStyle = styles.blackButtonNoBackground;
            break;
        default:
            buttonStyle = styles.defaultButton; 
            break;
    }

    return (
        <button className={buttonStyle}>
            {text}
            <svg   className={styles.arrow} width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path 
  d="M0.699951 0.5L4.69995 4.5L0.699951 8.5" 
  stroke={type === "blackButtonNoBackground" ? "black" : "white"} 
/>
</svg>
        </button>
    );
};

export default Button;
