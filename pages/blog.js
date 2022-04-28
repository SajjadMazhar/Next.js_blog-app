import Link from 'next/link'
import React from 'react'
import styles from '../styles/Blog.module.css'


// step 1 : collect all the files from blogdata directory
// step 2 : iterate through them and display them

const Blog = () => {
  return (
    <div className='styles.container'>
        <main className={styles.main}>
            <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
                <h2>How to learn JavaScript in 2022</h2></Link>
                <p>JavaScript is the language used to design the logic behind web</p>
                </div>
                <div className="blogItem">
                <h2>How to learn JavaScript in 2022</h2>
                <p>JavaScript is the language used to design the logic behind web</p>
                </div>
                <div className="blogItem">
                <h2>How to learn JavaScript in 2022</h2>
            <p>JavaScript is the language used to design the logic behind web</p>
            </div>
        </main>
    </div>
  )
}

export default Blog
