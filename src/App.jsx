import { Post } from "./Components/Post/Post";
import { Header } from "./Components/Header/Header";
import {Sidebar} from "./Components/Sidebar/SIdebar";

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
     <div>
       <Header />

       <div className={styles.wrapper}>
           <Sidebar />
           <main>
               <Post/>
               <Post/>
           </main>
       </div>
     </div>
  )
}
