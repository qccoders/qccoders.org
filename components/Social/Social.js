import styles from './Social.module.scss'
import { SocialIcon } from 'react-social-icons'
const urls = [
  'https://www.meetup.com/QCCoders',
  'https://www.facebook.com/qccoders',
  'https://github.com/qccoders',
  'https://www.youtube.com/channel/UCj0ulaio6fCqFSV5_4P5zNg',
]

const Social = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.icons}>
          {urls.map((url, i) => (
            <SocialIcon
              fgColor="#fff"
              key={i}
              style={{ height: '45px', width: '45px' }}
              url={url}
            />
          ))}
        </div>
        <div className={styles.text}>
          Have questions? Reach out to us at{' '}
          <a href="mailto:info@qccoders.org">info@qccoders.org</a>
        </div>
      </div>
    </div>
  )
}

export default Social
