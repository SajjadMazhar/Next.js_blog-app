import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'


// step 1 : collect all the files from blogdata directory
// step 2 : iterate through them and display them

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/blogs").then((a)=>{
            return a.json()
        }).then(data=>{
            console.log(data)
            setBlogs(data)
        })
    },[])
  return (
    <div className='styles.container'>
        <main className={styles.main}>

            {/* <div className={styles.blogItem}>
                
            <Link href={'/blogpost/learn-javascript'}>
                <h2>How to learn JavaScript in 2022</h2></Link>
                <p>JavaScript is the language used to design the logic behind web</p>
            </div> */}
            {
                blogs.map((blogItem)=>{
                    return(
                        <div className={styles.blogItem} key={blogItem.slug}>
                        <Link href={`/blogpost/${blogItem.slug}`}>
                            <h2>{blogItem.title}</h2>
                        </Link>
                            <p className={styles.blogItemp}>{blogItem.content.substr(0,200)}...</p>
                        </div>
                    )
                })
            }

        </main>
    </div>
  )
}

export default Blog
