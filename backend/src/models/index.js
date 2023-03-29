import Sequelize from 'sequelize';
import user from '../models/user';
import profile from '../models/profile';

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'postgres',
  }
);

const models = {
  User: user(sequelize, Sequelize),
  Profile: profile(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully');
  })
  .catch((err) => {
    console.error('Unable to connect to the database', err);
  });

export { sequelize };

export default models;
