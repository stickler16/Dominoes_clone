import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from "../../styles/Login.module.css"
const login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();
    const handleClick = async ()=>{
        try {
            await axios.post("http://localhost:3000/api/login",{
                username,
                password,
            });
            router.push("/admin")
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>ADMIN DASHBOARD</h1>
                <input placeholder="username" type="text" className={styles.input} onChange={(e) => setUsername(e.target.value)} />
                <input placeholder="password" type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleClick} className={styles.button}>
                    SignIn
                </button>
                {error && <span className={styles.error}>WRONG CREDENTIALS ! </span>}
            </div>
        </div>
    )
}

export default login