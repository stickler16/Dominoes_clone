import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza._id}`} passHref>
                <Image src={pizza.img} width="500" height="500" />
            </Link>
            <h1 className={styles.title}>
                {pizza.title}
            </h1>
            <span className={styles.price}>
                Rs. {pizza.prices[0]}
            </span>
            <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati, minima blanditiis
                {pizza.desc}
            </p>
        </div>
    )
}

export default PizzaCard