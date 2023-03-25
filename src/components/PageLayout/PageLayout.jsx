import Header from '@c/Header/Header';
import './PageLayout.css'

export default function PageLayout({children}) {

  return(
    <>
    <Header></Header>
    <main className='main'>
      {children}
    </main>
    </>
  )
}
