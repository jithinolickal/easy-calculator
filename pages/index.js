import styles from '../styles/Home.module.css'
import {Grid} from '@mui/material'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={4} lg={3}>
          <div className={styles.cardContainer}>
            <Link href="/average">
            <div>Average Calculator</div>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className={styles.cardContainer}>
          <div>text</div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className={styles.cardContainer}>
          <div>text</div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className={styles.cardContainer}>
          <div>text</div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
