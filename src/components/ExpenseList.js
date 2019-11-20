import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

//simple react component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
);

//preparing what to get from store
const mapStoreStateToProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters)
  };
};

//combines store and component
export default connect(mapStoreStateToProps)(ExpenseList);