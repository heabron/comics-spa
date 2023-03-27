import Image from 'next/image'
import { SearchInput } from '../Input'
import marvel from '@/assets/marvel.jpg'

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:h-20 items-center justify-between bg-transparent p-4 sm:px-4 sm:py-6">
      <Image
        src={marvel}
        alt="Marvel Comics"
        width={1920}
        height={1080} 
        className="absolute inset-0 h-screen w-screen object-cover brightness-[0.2]"
      />
      <label className="font-yesevaOne text-3xl text-whiteCoffee z-10">
        MARVELib
      </label>
      <SearchInput />
    </div>
  )
}
