import React, { useState } from 'react'
import styles from '../styles/OrderDetail.module.css'
const OrderDetailed = ({ total, createOrder }) => {


    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const handleClick = () => {

        createOrder({ customer, address, total, method: 0 });
        
    }
    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Pay after delivery COD</h1>
                <div className={styles.item}>
                    <label className={styles.label}> Name Surname</label>
                    <input placeholder="Full Name" type="text" className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}> Phone Number </label>
                    <input placeholder="+91 --------" type="" className={styles.input} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}> Address</label>
                    <input placeholder="Address" type="text" className={styles.input} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
            </div>

        </div>
    )
}

export default OrderDetailed