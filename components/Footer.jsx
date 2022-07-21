import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.webp" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.moto}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, non.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Our Outlets</h1>
                    <p className={styles.text}>
                        1234 XYZ road, 78901
                        <br />ABC
                        <br />+91 54646
                    </p>
                    <p className={styles.text}>
                        1234 XYZ road, 78901
                        <br />ABC
                        <br />+91 54646
                    </p>
                    <p className={styles.text}>
                        1234 XYZ road, 78901
                        <br />ABC
                        <br />+91 54646
                    </p>
                    <p className={styles.text}>
                        1234 XYZ road, 78901
                        <br />ABC
                        <br />+91 54646
                    </p>

                </div>
                <div className={styles.card}>
                <h1 className={styles.title}>
                    Working Hours
                </h1>
                <p className={styles.text}>
                    Mon-Fri
                    <br />8am - 12pm
                </p>
                <p className={styles.text}>
                    sat-sun
                    <br />9am - 2pm
                </p>

                </div>
            </div>
        </div>
    )
}

export default Footer