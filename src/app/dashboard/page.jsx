import Image from 'next/image'
import Main from '../Sections/Main'
import NavigationBar from '@/app/Sections/NavigationBar'


export default function Home() {
  return (
    <main className="flex items-start">
      <NavigationBar />
      <Main />
    </main>
  )
}
