import React from "react";
import Image from "next/image";
import styles from "./contents.module.css";
import HeroImage from "../../../../public/images/hero-image.png";
import Button from "../Button/Button";

const Contents = () => {
    return (
        <div className={styles.contents}>
                   <div className={styles.title}>
            <div className={styles.titleBlend}>
                <h1>Beyond   </h1>
                <h1> Contacts.</h1>
                <h1> Smarter</h1>
                <h1>Relationships.</h1>
            </div>
        </div>
            <div className={styles.description}>
                <p className={styles.p}>
                Supercharge your network with Kanban-driven lead tracking, AI-powered insights, and tools to connect, engage, and grow — all in one intuitive workspace.
                </p>
                <div className={styles.buttons}>
                    <Button
                        text="Start now"
                        type="blackButtonWithBackground"
                    ></Button>
                    <Button
                        text="Contact sales"
                        type="blackButtonNoBackground"
                    ></Button>
                </div>
            </div>
            <Image
                alt="hero image"
                className={styles.heroImage}
                src={HeroImage}
                // width={800}
                // height={300}
            />
        </div>
    );
};

export default Contents;
