import axios from 'axios';
import React, { useState } from 'react'
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };
    const handleExtra = (e) => {
        setExtraOptions(prev => [...prev, extra]);
    };
    const changePrice = (e, idx) => {
        const curr_prices = prices;
        curr_prices[idx] = e.target.value
        setPrices(curr_prices);
    };
    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dixigzloa/image/upload", data);
            const { url } = uploadRes.data;
            const newProduct = { title, desc, prices, extraOptions, img: url, };
            await axios.post("http://localhost:3000/api/products", newProduct);
            setClose(true);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>
                    x
                </span>
                <h1 className={styles.title}>ADD A PIZZA</h1>
                <div className={styles.item}>
                    <label className={styles.label}>IMAGE</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />

                    <label className={styles.label}>Title</label>
                    <input className={styles.input} type="text" onChange={(e) => setTitle(e.target.value)} />

                    <label className={styles.label}>Description</label>
                    <textarea rows={3} type="text" onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input type="number" placeholder="Small" onChange={(e) => changePrice(e, 0)} className={`${styles.input} ${styles.inputSmall}`}
                        />

                        <input type="number" placeholder="medium" onChange={(e) => changePrice(e, 1)} className={`${styles.input} ${styles.inputSmall}`}
                        />

                        <input type="number" placeholder="Large" onChange={(e) => changePrice(e, 2)} className={`${styles.input} ${styles.inputSmall}`}
                        />
                    </div>
                </div>
                <div className={styles.item}>

                    <label className={styles.label}>Extras</label>
                    <div className={styles.extra}>
                        <input className={`${styles.input} ${styles.inputSmall}`} type="text" name="text" onChange={handleExtraInput} placeholder="Item" />

                        <input className={`${styles.input} ${styles.inputSmall}`} type="number" name="price" onChange={handleExtraInput} placeholder="Price" />

                        <button className={styles.extraButton} onClick={handleExtra}>
                            ADD
                        </button>
                    </div>

                </div>
                <div className={styles.extraItems}>
                    {extraOptions.map((option) => (
                        <span key={option.text} className={styles.extraItem}>{option.text}</span>
                    ))}
                </div>
                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    )
}

export default Add