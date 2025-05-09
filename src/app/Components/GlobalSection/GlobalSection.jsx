"use client";
import React from "react";
import styles from "./global.module.css";

const GlobalSection = () => {
  return (
    <>
      <div className="container row">
        <div className="col-md-6">
          <div className={styles.global}>
            <h2>Global Scale</h2>
            <h1>The backbone for global commerce</h1>
            <div>
              Stripe makes moving money as easy and programmable as moving data.
              Our teams are based in offices around the world and we process
              hundreds of billions of dollars each year for ambitious businesses
              of all sizes.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.globalgridcontainer}>
        <div>            
        </div>
      </div>
    </>
  );
};

export default GlobalSection;
