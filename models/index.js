import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'

import companiesModel from './companies'
import hostsModel from './hosts'
import podcastsModel from './podcasts'
import podcastHostsModel from './podcastHosts'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const companies = companiesModel(connection, Sequelize)
const hosts = hostsModel(connection, Sequelize)
const podcasts = podcastsModel(connection, Sequelize, companies)
const podcastHosts = podcastHostsModel(connection, Sequelize, hosts, podcasts)

podcasts.belongsTo(companies)
companies.hasMany(podcasts)

hosts.belongsToMany(podcasts, { through: podcastHosts })
podcasts.belongsToMany(hosts, { through: podcastHosts })
