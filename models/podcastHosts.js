export default (connection, sequelize, hosts, podcasts) => connection.define('podcastHosts', {
  hostId: {
    type: sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: { model: hosts, key: 'id' },
  },
  podcastId: {
    type: sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: { model: podcasts, key: 'id' },
  },
}, {
  defaultScope: {
    attributes: { exclude: ['updatedAt', 'deletedAt', 'createdAt'] },
  },
}, {
  paranoid: true,
})
