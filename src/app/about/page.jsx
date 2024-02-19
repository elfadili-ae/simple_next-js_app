import React from 'react'
import styles from './page.module.css'
import cowork from '/public/coworking.jpg'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.imj} src={cowork} alt='storytellers' />
                <div className={styles.desc}>
                    <h2 className={styles.descTitle}>Dgitital Storytellers</h2>
                    <p>Handcrafting award winning digital experience</p>
                </div>
            </div>
            <div className={styles.TextContainer}>
                <div className={styles.item}>
                    <h1 className={styles.itemTitle}>who Are We?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non.
                        Accusamus quas id sint unde sit eveniet magni ipsa, numquam obcaecati
                        sequi possimus at quibusdam, eligendi officia aperiam nobis ex?
                        <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non.
                        Accusamus quas id sint unde sit eveniet magni ipsa, numquam obcaecati
                        sequi possimus at quibusdam, eligendi officia aperiam nobis ex?</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.itemTitle}>What Do We Do?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non.
                        Accusamus quas id sint unde sit eveniet magni ipsa, numquam obcaecati
                        sequi possimus at quibusdam, eligendi officia aperiam nobis ex?
                        <br /><br /></p>
                    <ul className={styles.list}>
                        <li>Creative Illustrations</li>
                        <li>Dynamic Websites</li>
                        <li>Fast and Handy Mobile Apps</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default About