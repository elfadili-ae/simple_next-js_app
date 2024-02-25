import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {params.category}
            </h3>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <h2 className={styles.descTitle}>Creative portfolio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus quos nihil fugiat quibusdam animi eum, et porro libero non sapiente,
                        cum obcaecati est nobis magnam omnis unde iusto. Explicabo.</p>
                    <Button url='/' text='See More' />
                </div>
                <div className={styles.imgContainer}>
                    <Image src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        fill={true}
                        className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <h2 className={styles.descTitle}>Creative portfolio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus quos nihil fugiat quibusdam animi eum, et porro libero non sapiente,
                        cum obcaecati est nobis magnam omnis unde iusto. Explicabo.</p>
                    <Button url='/' text='See More' />
                </div>
                <div className={styles.imgContainer}>
                    <Image src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        fill={true}
                        className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <h2 className={styles.descTitle}>Creative portfolio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus quos nihil fugiat quibusdam animi eum, et porro libero non sapiente,
                        cum obcaecati est nobis magnam omnis unde iusto. Explicabo.</p>
                    <Button url='/' text='See More' />
                </div>
                <div className={styles.imgContainer}>
                    <Image src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        fill={true}
                        className={styles.image} />
                </div>
            </div>
        </div>
    )
}

export default Category