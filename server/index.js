import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from '../build/middlewares.js';
import polka from 'polka';

const app = polka();

app.use('/svelte', assetsMiddleware, prerenderedMiddleware, kitMiddleware);

app.get('/no-svelte', (_, res) => {
	res.end('This is not Svelte!');
});

app.listen(3000);