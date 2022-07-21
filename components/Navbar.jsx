import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';




const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/phone.gif" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>order Now</div>
                    <div className={styles.text}>+9184679864</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <div className={styles.logo}>Pizzeria</div>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.jpg" alt="" width="30px" height="30px" style={{borderRadius:"50%",border:"5px solid blue"}}/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )

}


export default Navbar;