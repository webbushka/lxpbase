'use strict';
import path from 'path';
import util from 'util';
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import { render } from './xml';

const server = express();
const port = process.env.PORT || 3000;

server
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
  .use('/', express.static(path.join(__dirname, 'dist')))
	.get('/', (req, res) => {
	  res.send('lxpbase test server');
	})
  .post('/', (req, res) => {
		const data = req.body;
		axios.post('http://lxpbase.stagingrevi.com/lxpbase', render(data))
			.then((result) => {
				res.send(result.data);
			}).catch((err) => {
			  console.log(`ERROR ${err}`);
			});
  });


server.listen(port, err => {
  if (err) {
    console.info(`Error: ${util.inspect(err)}`);
  } else {
    console.info(`Server started listening on http://localhost:${port}`);
  }
});
