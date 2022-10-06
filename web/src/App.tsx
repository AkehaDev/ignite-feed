import './styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
 

function App() {
    return (
      <div>
        <Header />
        <div className='grid grid-cols-[16rem_1fr] max-w-[70rem] mx-auto mt-8 gap-8 items-start'>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <Post/>
          </main>
        </div>
      </div>

    )
  }

export default App
