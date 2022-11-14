import { Post } from "./Components/Post/Post";
import { Header } from "./Components/Header/Header";
import {Sidebar} from "./Components/Sidebar/SIdebar";

import styles from './App.module.css';

import './global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/50303514?v=4',
            name: 'Ismael Vargas',
            role: 'CEO @PayWall'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋', },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/8763192?v=4',
            name: 'Jonatas Vargas',
            role: 'CTO @PayWall'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋', },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-11-10 20:00:00'),
    },
];

export function App() {
  return (
     <div>
       <Header />

       <div className={styles.wrapper}>
           <Sidebar />
           <main>
               {posts.map(post => {
                   return (
                       <Post
                           author={post.author}
                           content={post.content}
                           publishedAt={post.publishedAt}
                       />
                   )
               })}
           </main>
       </div>
     </div>
  )
}
