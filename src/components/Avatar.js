import styles from './Avatar.module.css'

import React from 'react'

export default function Avatar({name,src}) {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
    {/* <span style={{paddingRight:'1rem'}}>{`Hello  ${name}`}</span> */}
    <div className={styles.avatar}>

        <img src={src} alt="Your image here" onClick={()=>alert('workout bitch')}/>
    </div>
    </div>
  )
}
