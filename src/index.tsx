import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela Web Site React',
          type: 'deposit',
          category: 'Development',
          amount: 10000,
          createdAt: new Date('2021/01/08 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Home',
          amount: 1000,
          createdAt: new Date('2021/05/08 11:00:00')
        }
      ],
    })
  }, 

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.db.transactions;
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
