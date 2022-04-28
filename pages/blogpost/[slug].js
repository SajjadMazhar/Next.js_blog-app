import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// step 1 : find the file corresponding to the slug 
// step 2 : populate them inside the page

const slug = (props) => {
  const [blog, setBlog] = useState(props.myblog)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
          {blog && blog.content}
        </div>
      </main>
    </div>
  )
}



export async function getServerSideProps(context) {

  // const router = useRouter();
  const { slug } = context.query
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  const myblog = await res.json()

  return {
    props: { myblog }, // will be passed to the page component as props
  }
}
export default slug
