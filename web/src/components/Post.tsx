import { Avatar } from './Avatar'

export function Post() {
  return (
    <article className='bg-ignite-gray-700 rounded-lg py-8 px-8'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Avatar
            src="https://github.com/akehadev.png"
          />
          <div className='flex flex-col'>
            <strong className='leading-[1.6]' >Akeha</strong>
            <span className='text-ignite-gray-300 text-sm leading-[1.6]'>Dev Front-End</span>
          </div>
        </div>
        <time className='text-ignite-gray-300 text-sm leading-[1.6]'
          title='October 29, 08:44 PM'
          dateTime='2022-10-05 08:44 PM'>
          Posted 1h ago
        </time>
      </header>

      <div className='pt-6'>
        <p>Hi guuuys 👋</p>

        <p> I just uploaded another project in my portfolio. It's a project that i did at NLW Return, a Rocketseat event. The project name is DoctorCare 🚀</p>

        <p>👉 jane.design/doctorcare</p>

        <p>#newproject #nlw #rocketseat</p>
      </div>
    </article>
  )
}