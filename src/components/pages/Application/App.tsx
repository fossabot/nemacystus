import * as React from 'react'
import logo from './logo.svg'
import styles from './index.css'

const Application: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Edit</p>
        <code>src/App.tsx</code>
        <p>and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Application
