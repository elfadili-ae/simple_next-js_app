import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const blogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.desc}>
                    <h1 className={styles.title}>Big Title</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Earum corporis harum omnis quos eaque aliquam illum placeat, dolorem in! Esse aliquid cum,
                        eaque fugit distinctio laboriosam? Voluptates suscipit quidem dolores!</p>
                    <div className={styles.author}>
                        <div className={styles.authImage}>
                            <Image
                                src='https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                fill={true}
                                className={styles.image}
                            />
                        </div>
                        <p>Jhon Doe</p>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src='https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt=''
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.botContainer}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis soluta asperiores dignissimos odit enim distinctio doloribus unde atque impedit tempore. Culpa placeat vero eaque a tenetur doloribus perferendis quidem quibusdam?</p>
                <p>Dolor laboris ex nulla exercitation commodo anim mollit irure ipsum esse voluptate aliquip commodo velit. Ad et veniam laborum et ad aliqua ea fugiat adipisicing. Do qui quis commodo proident anim minim consectetur excepteur non. Pariatur cupidatat duis est voluptate. Nulla officia consequat consequat ullamco ea est officia tempor reprehenderit sint veniam amet. Sit dolore anim qui qui.
                    <br />
                    <br />
                    In nulla occaecat quis elit id elit dolor incididunt.
                    Exercitation do commodo eiusmod excepteur exercitation nisi labore proident qui commodo velit ad nulla ut.
                    Veniam ea quis mollit sint tempor ipsum sint occaecat cillum nostrud.
                    Veniam reprehenderit reprehenderit culpa commodo enim tempor elit velit consectetur tempor Lorem excepteur.
                    Dolor aliquip pariatur laborum anim cupidatat dolor cillum id consequat ipsum dolor eu nulla labore.
                </p>
                <br />
                <p>Dolor laboris ex nulla exercitation commodo anim mollit irure ipsum esse voluptate aliquip commodo velit. Ad et veniam laborum et ad aliqua ea fugiat adipisicing. Do qui quis commodo proident anim minim consectetur excepteur non. Pariatur cupidatat duis est voluptate. Nulla officia consequat consequat ullamco ea est officia tempor reprehenderit sint veniam amet. Sit dolore anim qui qui.
                    <br />
                    <br />
                    In nulla occaecat quis elit id elit dolor incididunt.
                    Exercitation do commodo eiusmod excepteur exercitation nisi labore proident qui commodo velit ad nulla ut.
                    Veniam ea quis mollit sint tempor ipsum sint occaecat cillum nostrud.
                    Veniam reprehenderit reprehenderit culpa commodo enim tempor elit velit consectetur tempor Lorem excepteur.
                    Dolor aliquip pariatur laborum anim cupidatat dolor cillum id consequat ipsum dolor eu nulla labore.
                </p>
            </div>
        </div>
    )
}

export default blogPost