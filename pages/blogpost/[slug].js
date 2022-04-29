import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

// step 1 : find the file corresponding to the slug 
// step 2 : populate them inside the page

const Slug = (props) => {
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug:'how-to-learn-flask'} },
      { params: { slug:'how-to-learn-javascript'} },
      { params: { slug:'how-to-learn-nextjs'} }
    ],
    fallback: true // false or 'blocking'
  };
}



export async function getStaticProps(context) {
  const { slug } = context.params;
  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

   

  return {
    props: { myblog:JSON.parse(myblog) } // will be passed to the page component as props
  }
}
export default Slug
