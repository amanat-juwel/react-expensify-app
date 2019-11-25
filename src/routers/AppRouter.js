import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
		<div>
			<Header />
			<Switch>
				<Route exact={true} path="/" component={LoginPage} />
				<Route exact path="/dashboard" component={ExpenseDashboardPage} />
				<Route exact path="/create" component={AddExpensePage} />
				<Route exact path="/edit/:id" component={EditExpensePage} />
				<Route exact path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;


