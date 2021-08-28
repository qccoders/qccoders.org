import {
  Badge,
  toaster,
  ArrowLeftIcon,
  ArrowRightIcon,
  IconButton,
  Spinner,
} from 'evergreen-ui'
import styles from './Events.module.scss'
import { useEffect, useState } from 'react'

const fetchEvents = () => fetch('https://qccoderseventservice.glitch.me/events')

const strip = str => str.replace(/(<([^>]+)>)/gi, '')

const Events2 = () => {
  const [events, setEvents] = useState([])
  const [offset, setOffset] = useState(0)
  const [didError, setDidError] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)
  useEffect(() => {
    fetchEvents().then(res =>
      res
        .json()
        .then(events => setEvents(events))
        .catch(() => setDidError(true))
    )
  }, [])

  const eventsNewToOld = [...events].sort(
    (eventA, eventB) => new Date(eventB.startDate) - new Date(eventA.startDate)
  )

  const futureEvents = eventsNewToOld.filter(event => {
    const start = new Date(event.startDate)
    start.setHours(0, 0, 0, 0)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return start >= today
  })

  const nextEvent = futureEvents[futureEvents.length - 1] ?? eventsNewToOld[0]

  const indexOfNextEvent = eventsNewToOld.findIndex(
    event =>
      nextEvent.startDate === event.startDate && nextEvent.title === event.title
  )

  if (didError) {
    toaster.danger('Something went wrong getting events.', { duration: 2 })
  }

  if (!nextEvent && !eventsNewToOld.length && !didError) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.spinner}>
          <Spinner />
        </div>
      </div>
    )
  }

  const displayEvent = eventsNewToOld[indexOfNextEvent + offset]

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const displayEventDate = new Date(displayEvent.startDate)
  displayEventDate.setHours(0, 0, 0, 0)

  const isPast = today > displayEventDate
  const isPresent = today.getTime() === displayEventDate.getTime()
  const isFuture = today < displayEventDate

  return (
    <div className={styles.wrapper}>
      <div
        className={startAnimation && styles.animation}
        onAnimationEnd={() => setStartAnimation(false)}
      />
      <div>
        <div className={styles.header}>
          <IconButton
            icon={ArrowLeftIcon}
            appearance="minimal"
            disabled={!eventsNewToOld[indexOfNextEvent + offset + 1]}
            onClick={() => {
              setStartAnimation(true)
              setOffset(offset => offset + 1)
            }}
          />
          <h1>QC Coders Events</h1>
          <IconButton
            icon={ArrowRightIcon}
            appearance="minimal"
            disabled={!eventsNewToOld[indexOfNextEvent + offset - 1]}
            onClick={() => {
              setStartAnimation(true)
              setOffset(offset => offset - 1)
            }}
          />
        </div>
        <div className={styles.badge}>
          <Badge
            color={
              (isPast && 'neutral') ??
              (isPresent && 'green') ??
              (isFuture && 'blue')
            }
          >
            {(isPast && 'past event') ??
              (isPresent && 'today') ??
              (isFuture && 'future event')}
          </Badge>
        </div>
        <div className={styles.title}>
          <p className={styles.text}>{displayEvent.title}</p>
          <p className={styles.end}>
            {new Date(displayEvent.startDate)
              .toLocaleString()
              .replace(':00', '')}
          </p>
        </div>
        <p>{strip(displayEvent.description)}</p>
      </div>
    </div>
  )
}

export default Events2
