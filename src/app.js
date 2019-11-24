import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({ description: 'House Rent', amount: 100, createdAt: 3 }));
store.dispatch(addExpense({ description: 'Car Rent', amount: 350, createdAt: 2 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 800, createdAt: 1 }));
store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  
);

ReactDOM.render(jsx, document.getElementById('app'));