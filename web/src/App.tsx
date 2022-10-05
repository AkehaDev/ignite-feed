import './styles/global.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'


function App() {
    return (
      <div>
        <Header />
        <div className='grid grid-cols-[16rem_1fr] max-w-[70rem] mx-auto my-8 gap-8 items-start'>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <h1>main</h1>
          </main>
        </div>
      </div>

    )
  }

export default App
