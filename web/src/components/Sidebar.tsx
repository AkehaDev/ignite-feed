

import { Avatar } from './Avatar'
import { PencilSimpleLine } from 'phosphor-react'



export function Sidebar() {
  return (
    <aside className="bg-ignite-gray-700 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507752533523-5186b0bc4c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        alt="profile banner"
        className="h-[4.5rem] w-full object-cover" />
      <div className="flex flex-col items-center mt-[calc(0px_-_1.535rem_-_6px)]">
        <Avatar
          src="https://github.com/natsume2b.png" />
        <strong className='mt-4 text-ignite-gray-100 leading-[1.6]'>Natsume</strong>
        <span className='text-sm text-ignite-gray-300 leading-[1.6]'>Dev Front-End</span>
      </div>

      <footer className='flex justify-center border-t border-ignite-gray-500 mt-6 pt-6 pb-8'>
        <a
          href="#"
          className='border rounded-lg text-ignite-green-100 border-ignite-green-100 pt-4 pb-[0.88rem] hover:bg-ignite-green-100 hover:text-ignite-white transition cursor-pointer '
        >
          <strong className='flex items-center gap-[0.63rem] px-6 leading-[1.19rem]'>
            <PencilSimpleLine size={25} />
            Edit your profile</strong>
        </a>
      </footer>



    </aside>
  )
}