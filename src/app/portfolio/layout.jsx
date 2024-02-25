import React from 'react'
import Portfolio from './page'
import styles from './page.module.css'

const layout = ({ children }) => {
    return (
        <div>
            <h1 className={styles.title}>Our Works</h1>
            {children}
        </div>
    )
}

export default layout