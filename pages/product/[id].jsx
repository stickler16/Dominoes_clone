import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from '../../styles/Product.module.css';
import { addProduct } from '../../redux/cartSlice';

const Product = ({ pizza }) => {
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza.prices[0]);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price + number);

    };
    const handleSize = (sizeIdx) => {
        const difference = pizza.prices[sizeIdx] - pizza.prices[size];
        setSize(sizeIdx);
        changePrice(difference)
    };

    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if (checked) {
            changePrice(option.price);
            setExtras(prev => [...prev, option]);
        } else {
            changePrice(-option.price);
            setExtras(extras.filter(extra => extra._id !== option._id));
        }
    };


    const handleClick = () => {
        dispatch(addProduct({ ...pizza, extras, price, quantity }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout="fill" objectFit="contain" />
                </div>
            </div>
            <div className={styles.rightSide}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>Rs {price}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose serving</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose Extra Toppings</h3>
                <div className={styles.ingredients}>
                    {pizza.extraOptions.map((option) => (

                        <div className={styles.options} key={option._id}>
                            <input className={styles.checkbox} type="checkbox" name={option.text} id={option.text} onChange={(e) => handleChange(e, option)} />
                            <label htmlFor={option.text}>{option.text} <span className={styles.double}>2x</span> </label>
                        </div>

                    ))}

                </div>
                <div className={styles.add}>
                    <input onChange={(e) => setQuantity(e.target.value)} type="number" min="0" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button} onClick={handleClick}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}



export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);

    return {
        props: {
            pizza: res.data,
        },
    };
};


export default Product;