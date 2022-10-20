import './styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


const posts = [
  {
    Id: 1,
    author: {
      avatarUrl: "https://github.com/natsume2b.png",
      name: 'Natsume',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Heey guuys 👋' },
      { type: 'paragraph', content: "I just uploaded another project in my portfolio. It's a project that i did at NLW Return, a Rocketseat event. The project name is DoctorCare 🚀" },
      { type: 'link', content: 'natsume.design/doctorcare' },
      { type: 'link', content: '#newproject #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-10-20 14:41:00'),
  },
  {
    Id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educator at @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Heey guuys 👋' },
      { type: 'paragraph', content: "I just uploaded another project in my portfolio. It's a project that i did at NLW Return, a Rocketseat event. The project name is DoctorCare 🚀" },
      { type: 'link', content: 'natsume.design/doctorcare' },
      { type: 'link', content: '#newproject #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-10-18 16:10:00'),
  },

];

export function App() {
  return (
    <div>
      <Header />
      <div className='grid md:grid-cols-[16rem_1fr] max-w-[70rem] md:mx-auto mt-8 gap-8 items-start
       mx-7 text-[87.5%] md:text-base '>
        <aside>
          <Sidebar />
        </aside>
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