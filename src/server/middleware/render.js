import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../App';
import fetch from 'isomorphic-fetch';


async function getData(){
  let list = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
  list = await list.json();
  return list;
}

const renderMiddleware = () => async (req, res) => {
  let list = await getData();
  let html = req.html;
  const htmlContent = ReactDOMServer.renderToString(<App list={list} />);
  const htmlReplacements = {
    HTML_CONTENT: htmlContent,
  };
  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('__' + escapeStringRegexp(key) + '__', 'g'),
      value
    );
  });
  res.send(html);
};

export default renderMiddleware;
