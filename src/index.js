import dva from 'dva';
import 'antd/dist/antd.css';  
import './index.css';

//import router from './router';
import appRouter from './app';
import createHistory from 'history/createBrowserHistory';

// 1. Initialize
// https://dvajs.com/api/#app-dva-opts
const app = dva({history:createHistory(),});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
// app.router(router);

app.router(appRouter);

// 5. Start
app.start('#root');
