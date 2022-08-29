import { Header } from './components/Header/header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import './global/style.css'
import styles from './App.module.css'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/93044374?v=4',
      name: 'Fábio Henrique',
      role: 'Dev Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala Devs!!!' },
      { type: 'paragraph', content: 'Desenvolvi essa interface para que possamos falar mais abertamente sobre os projetos que estou desenvolvendo.' },
      { type: 'link', content: 'https://github.com/Fabi0Pt/Feed-react'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/93044374?v=4',
      name: 'Fábio Henrique',
      role: 'Dev Web'
    },
    content: [
      { type: 'paragraph', content: 'E aí Devs!!!' },
      { type: 'paragraph', content: 'Acabei de subir um projeto Dtmoney!' },
      { type: 'link', content: 'https://github.com/Fabi0Pt/dtmoney'}
    ],
    publishedAt: new Date('2022-06-03 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/93044374?v=4',
      name: 'Fábio Henrique',
      role: 'Dev Web'
    },
    content: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    ],
    publishedAt: new Date('2022-07-03 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
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
