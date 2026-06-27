import styles from './travelTitle.module.css'

export default function TravelTitle({ bg = '/images/travel-map.jpg', height = '480px', overlay = false }) {
  if (overlay) {
    return (
      <h1 className={styles.overlayTitle} aria-hidden>
        TRAVEL
      </h1>
    )
  }

  return (
    <div
      className={styles.wrapper}
      aria-hidden
      style={{ backgroundImage: `url(${bg})`, height }}
    >
      <div className={styles.overlay} />
      <h1 className={styles.title}>TRAVEL</h1>
    </div>
  )
}
