import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className='bg-ignite-gray-700 flex items-center justify-center gap-4'>
      <img
        src={igniteLogo}
        alt="ignite logo"
        className='py-5' />
      <h1 className='text-ignite-gray-100 text-[25px]'>Ignite feed</h1>
    </header>
  )
}