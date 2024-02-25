import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Blog = () => {
    return (
        <div className={styles.container}>
            <Link href="/blog/testId" className={styles.linkContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        src='https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '
                        alt=''
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>description</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.linkContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        src='https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '
                        alt=''
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>description</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog