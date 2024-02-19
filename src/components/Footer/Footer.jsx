import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2024 Tsugi. All rights reserved.</div>
            <div className={styles.socials}>
                <Image src='/1.png' width={15} height={15} className={styles.logo} alt='facebook' />
                <Image src='/2.png' width={15} height={15} className={styles.logo} alt='instagram' />
                <Image src='/3.png' width={15} height={15} className={styles.logo} alt='twitter' />
                <Image src='/4.png' width={15} height={15} className={styles.logo} alt='youtube' />
            </div>
        </div>
    )
}

export default Footer