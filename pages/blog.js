import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';

// step 1 : collect all the files from blogdata directory
// step 2 : iterate through them and display them

const Blog = (props) => {
    console.log(props)
    const [blogs, setBlogs] = useState(props.allblogs)

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




export async function getStaticProps(context) {
    let data = await fs.promises.readdir("./blogdata", "utf-8")
    let myfile;
    let allblogs = []
    for(let i=0; i<data.length; i++){
        const item = data[i]
        myfile = await fs.promises.readFile("blogdata/"+item, "utf-8")
        allblogs.push(JSON.parse(myfile))
    }
    
    
    return {
      props: {allblogs}, // will be passed to the page component as props
    }
  }

export default Blog
