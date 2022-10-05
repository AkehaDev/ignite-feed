export function Avatar({ src }) {
  return (
    <div className="mt-[calc(0px_-_1.535rem_-_6px)]">
      <img className="w-[calc(3.07rem_+_12px)] rounded-lg border-4 border-ignite-gray-700 outline outline-ignite-green-100"
        src={src}
        alt='user avatar' />
    </div>

  )
}