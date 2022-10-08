import './styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


function App() {
  return (
    <div>
      <Header />
      <div className='grid md:grid-cols-[16rem_1fr] max-w-[70rem] md:mx-auto mt-8 gap-8 items-start
       mx-7 text-[87.5%] md:text-base'>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Akeha"
            role="Dev Front-End"
          />
          <Post
            author="Akeha"
            role="Dev Front-End"
          />
        </main>
      </div>
    </div>

  )
}

export default App
