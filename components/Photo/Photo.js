import Image from 'next/image'
import styles from './Photo.module.scss'
const Photo = ({ src }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="scale-down"
        src={src}
        placeholder="blur"
        alt="me"
      />
    </div>
  )
}

export default Photo
