import 'dotenv/config';
import { sequelize } from './models';
import app from './app';

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Express Running');
  });
});
