/**
 * Created by lenovo on 2017/6/5.
 */
const app = require('../app');

const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
    const host = server.address.host;
   console.log('server start at: ' + host + ':' + port);
});