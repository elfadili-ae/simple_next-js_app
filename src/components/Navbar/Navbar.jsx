"use client"
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    }
];

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">Tsugi</Link>
            </div>

            <div className={styles.links}>
                {links.map(link => {
                    return <Link key={link.id} href={link.url}>{link.title}</Link>
                })}
                <button className={styles.logout} onClick={() => { console.log("Logged out!") }}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar