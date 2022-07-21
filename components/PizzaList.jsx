import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'
const PizzaList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Famous Pizzas 🍕  
            </h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae temporibus dolorem, et inventore eaque, expedita ab commodi unde tempora similique debitis maiores esse sit voluptatum autem nesciunt dolores suscipit!
            </p>
            <div className={styles.wrapper}>
                {pizzaList?.map((pizza)=>(
                    <PizzaCard key={pizza._id} pizza={pizza}/>
                ))}
            </div>
        </div>
    )
}

export default PizzaList