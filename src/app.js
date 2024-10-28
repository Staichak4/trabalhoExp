import e from 'express';
import routerExplorer from './routes/routerExplorer.js';
import routerExpedition from "./routes/routerExpedition.js";
import routerSpecies from "./routes/routerSpecies.js";

const app = e();

app.use(e.json());

app.use('/explorer', routerExplorer);
app.use('/expedition', routerExpedition);
app.use('/species', routerSpecies);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));