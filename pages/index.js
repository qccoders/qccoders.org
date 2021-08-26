import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Photo from '../components/Photo/Photo'
import { HomeContextProvider } from '../contexts/HomeContext/HomeContext'
import Events from '../components/Events/Events'
import Social from '../components/Social/Social'
import casualImg from '../public/casual.jpeg'
import scrumImg from '../public/scrum.jpeg'
import presentationImg from '../public/presentation.jpg'
import anniversaryImg from '../public/anniversary_cake.jpg'
import bgImg from '../public/bg.jpg'

export default function Home() {
  return (
    <HomeContextProvider>
      <div className={styles.container}>
        <div className={styles.bg}>
          <Image
            src={bgImg}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles.scrim} />
        <Header />
        <div className={styles.items}>
          <About />
          <Photo src={casualImg} />
          <Photo src={scrumImg} />
          <Photo src={presentationImg} />
          <Events />
          <Photo src={anniversaryImg} />
        </div>
        <Social />
      </div>
    </HomeContextProvider>
  )
}
