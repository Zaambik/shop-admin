import { FC, useState, useEffect } from 'react'

import styles from './Footer.module.scss'

const Footer: FC = () => {
   return (
      <footer>
         <div className={styles.wrapper}>
            <span>2023 / Все права защищены</span>
            <ul>
               <li>
                  <a href="#" target="_blank">Безопсаность</a>
               </li>
               <li>
                  <a href="#" target="_blank">Вопросы</a>
               </li>
               <li>
                  <a href="#" target="_blank">Помощь</a>
               </li>
               <li>
                  <a href="#" target="_blank">API</a>
               </li>
            </ul>
         </div>
      </footer>
   );
}

export default Footer