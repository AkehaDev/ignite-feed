import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post({ author, content, publishedAt }) {
  return (
    <article className='bg-ignite-gray-700 rounded-lg py-8 px-8 mb-8'>

      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Avatar
            src="https://github.com/natsume2b.png"
          />
          <div className='flex flex-col'>
            <strong className='leading-[1.6]' >{author.name}</strong>
            <span className='text-ignite-gray-300 text-sm leading-[1.6]'>{author.role}</span>
          </div>
        </div>
        <time className='text-ignite-gray-300 text-sm leading-[1.6]'
          title='Octuber 5, 08:44 PM'
          dateTime='2022-10-05 08:44 PM'>
          Posted 1h ago
        </time>
      </header>

      <div className='pt-6 leading-[1.6] text-ignite-gray-200 '>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content} className="mb-4">{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a key={line.content} href="#" className='text-ignite-green-100 text-ignite-green-500 hover:text-ignite-green-300 transition-[0.1s] font-bold'>{line.content}</a></p>
          }
        })}
      </div>

      <form className='border-t border-ignite-gray-500 mt-6 pt-6 group'>
        <p className='font-bold leading-[1.6] text-ignite-gray-100 pb-4'>Leave your feedback</p>
        <textarea className='w-full h-24 mb-4 leading-[1.4] rounded-lg bg-ignite-gray-800 text-ignite-gray-200 py-[0.82rem] px-4 resize-none focus:border-none focus:outline-none focus:shadow-[0px_0px_0px_2px] focus:shadow-ignite-green-100 focus:transition-[0.3s]'
          placeholder='Wow, i loved! Congratulations!'>
        </textarea>

        <footer className='invisible max-h-0 opacity-0 group-focus-within:visible group-focus-within:max-h-52 group-focus-within:opacity-100 transition-[0.3s]'>
          <button className='py-4 px-6 rounded-lg cursor-pointer bg-ignite-green-300 hover:bg-ignite-green-100 hover:transition-[0.3s]'>Post</button>
        </footer>
      </form>

      <div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}