import Image from 'next/image'
import lagartixa from '@/assets/lagartixa.jpg'

export function Cards() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-persianPlum p-8 gap-2">
      <Image
        src={lagartixa}
        alt={'meu amor'}
        width={250}
        height={500}
        className="rounded-3xl"
      ></Image>
      <div className="text-center text-sm font-semibold xs:text-xs flex flex-col gap-2">
        <h1 className="uppercase">declaração de amor ao chishiya</h1>
        <h1>Heloisa A. Roncato</h1>
        <h1>26/03/2023</h1>
        <h1>
          <p>Personagens relacionados: Arisu, Hikari Kuina, Usagi, muie chata</p>
        </h1>
      </div>
    </div>
  )
}
