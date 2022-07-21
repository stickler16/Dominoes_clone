import React from 'react';
import styles from "../styles/Add.module.css";
const AddButton = ({ setClose }) => {
    return (
        <div className={styles.mainAddButton} onClick={() => setClose(false)}>AddButton</div>
    )
}

export default AddButton