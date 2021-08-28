import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.container}>
      <h1>
        {`<`}
        <span className={styles.qc}>QC</span>coders{`/>`}
      </h1>
    </div>
  )
}

export default Header
