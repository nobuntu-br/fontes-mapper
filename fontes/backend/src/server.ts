import { getDefaultTenantConnection } from './adapters/database.config';
import app from './app';
import showTime from './utils/showTime.util';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await getDefaultTenantConnection();
  showTime();
  console.log(`Servidor está rodando na porta ${PORT}`);
});
