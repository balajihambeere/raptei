import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('rapteidb', 'appdev', 'dev123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;