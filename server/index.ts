import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { AppDataSource } from './db/data-source'
import router from './routes'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api', router)

AppDataSource.initialize()
   .then(() => {
      AppDataSource.runMigrations().then(() => {
         app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
      })
   })
   .catch((err) => {
      console.error('DB init failed:', err)
      process.exit(1)
   })
