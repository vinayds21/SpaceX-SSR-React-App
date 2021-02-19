import express from 'express';

let app = require('./server').default;
if (module.hot) {
  module.hot.accept('./server', () => {
    try {
      app = require('./server').default;
    } catch (error) {
      // Do nothing
    }
  });
}

express()
  .use((req, res) => app.handle(req, res))
  .listen(process.env.PORT || 3000, () => {
    console.log(
      `App is running on http://localhost:${process.env.PORT || 3000}`
    );
  });
