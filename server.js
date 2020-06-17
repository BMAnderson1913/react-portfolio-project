import express from 'express'
import bodyParser from 'body-parser'
import { getAllCompanies, getCompanyByName } from './controllers/companies'
import { getAllHosts, getHostByFirstOrLastName, addNewHost } from './controllers/hosts'
import { getAllPodcasts, getPodcastByName, addNewPodcast } from './controllers/podcasts'

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => response.status(200).render('index'))

app.get('/companies', getAllCompanies)
app.get('/companies/:identifier', getCompanyByName)

app.get('/hosts', getAllHosts)
app.get('/hosts/:identifier', getHostByFirstOrLastName)
app.post('/hosts/', bodyParser.json(), addNewHost)

app.get('/podcasts', getAllPodcasts)
app.get('/podcasts/:podcastName', getPodcastByName)
app.post('/podcasts/', bodyParser.json(), addNewPodcast)

app.listen(8820, () => {
  console.log('Listening on port 8820...') // eslint-disable-line no-console
})
