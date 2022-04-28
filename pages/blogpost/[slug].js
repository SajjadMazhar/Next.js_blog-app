import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// step 1 : find the file corresponding to the slug 
// step 2 : populate them inside the page

const slug = () => {
    const router = useRouter();
    const {slug} = router.query
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum sapiente suscipit, molestiae animi id aspernatur doloribus cum officia est quia ratione incidunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores, rerum, modi expedita error blanditiis iusto animi quae deleniti quaerat corporis inventore quod architecto nemo. Vel, quisquam sint? Velit repudiandae possimus nobis officia dolores modi cupiditate, molestias ipsum praesentium iusto pariatur sapiente asperiores reiciendis ullam!
      </div>
      </main>
    </div>
  )
}

export default slug
