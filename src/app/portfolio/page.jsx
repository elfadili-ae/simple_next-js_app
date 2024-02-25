import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <div>
            <p className={styles.subTitle}>Choose a gallery</p>
            <div className={styles.gallery}>
                <Link href='/portfolio/illustrations'>
                    <div className={styles.galleryItem}>
                        <div className={styles.imgContainer}>
                            <Image src='https://plus.unsplash.com/premium_photo-1667238527956-3890f6217e60?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                fill={true}
                                className={styles.image} />
                        </div>
                        <h3 className={styles.galleryTitle}>Illustrations</h3>
                    </div>
                </Link>
                <Link href='/portfolio/websites'>
                    <div className={styles.galleryItem}>
                        <div className={styles.imgContainer}>
                            <Image src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                fill={true}
                                className={styles.image} />
                        </div>
                        <h3 className={styles.galleryTitle}>Websties</h3>
                    </div>
                </Link>
                <Link href='/portfolio/applications'>
                    <div className={styles.galleryItem}>
                        <div className={styles.imgContainer}>
                            <Image src='https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                fill={true}
                                className={styles.image} />
                        </div>
                        <h3 className={styles.galleryTitle}>Applications</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio