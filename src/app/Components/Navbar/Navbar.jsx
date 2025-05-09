import React from "react";
import Logo from "../../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.logo}>
                    <Image alt="logo" src={Logo} height={40} width={100}></Image>
                </li>
                <li className={styles.li}>
                    <Link href="/" className={styles.a}>
                        Overview
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/" className={styles.a}>
                        Features
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/" className={styles.a}>
                        Pricing
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/" className={styles.a}>
                    Terms & Conditions
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/" className={styles.a}>
                        Privacy Policy
                    </Link>
                </li>
            </ul>
            <div className={styles.buttons}>
                <Button text="Contact sales" type="whiteButtonNoBackground" />
                <Button text="Sign in" type="whiteButtonWithBackground" />
            </div>
        </nav>
    );
};

export default Navbar;
