import React from 'react'
import styles from './index.module.css'
export default function index() {
  return (
    <div className='container'>
      <div className={styles['form']}>
        <div className={styles['form_inner']}>
          <div className={styles['form_img']}>
            <img src="/Images/form_img.png" alt="" />
          </div>
          <form>
            <h3>Still are you hesitating?</h3>
            <div className={styles['box']}></div>
            <span>Your work is going to fill a large part of your life, and the only way to be truly satisfied.</span>
            <div className={styles['input_top']}>
              <input type="text" placeholder='Enter your name' />
              <input type="text"  placeholder='Enter phone tel' />
            </div>
            <div className={styles['input_bottom']}>
            <textarea  placeholder='Enter your subject' />
              <div className={styles['circle']}></div>
            </div>
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  )
}
