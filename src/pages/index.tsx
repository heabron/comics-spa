import Head from 'next/head'
import { switchTheme } from '@/utils/switchTheme'
import Scroll from '@/components/ScrollDown'
import { Input } from '@/components/Input'
import { Cards } from '@/components/Cards'

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      <Head>
        <title>MARVELib</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className="flex h-[70vh] flex-col items-center justify-center gap-40">
        <label className="z-10 mt-10 flex flex-col p-4 text-center text-lg">
          <span>Seja bem-vindo à MARVELib,</span>
          <span>a sua biblioteca de quadrinhos da Marvel!</span>
        </label>
        <Scroll />
      </main>
      <body className="my-20 flex flex-col items-center justify-center gap-5">
        <button onClick={switchTheme} className="text-red-500">
          thema
        </button>
        <div className="flex w-[90vw] max-w-lg flex-col items-center justify-center rounded-2xl bg-persianPlum py-4 px-8 smed:max-w-none">
          <label className="text-center font-medium">
            Procure por nome, autor, personagem...
          </label>
          <Input />
        </div>
        <div className="flex w-[90vw] max-w-lg flex-col gap-4 xs:grid xs:grid-cols-2 smed:max-w-none med:grid-cols-3">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </body>
    </div>
  )
}
