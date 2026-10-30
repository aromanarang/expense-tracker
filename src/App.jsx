import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])

  function addExpense(expense) {
    setExpenses((currentExpenses) => [
      ...currentExpenses,
      { ...expense, id: crypto.randomUUID() },
    ])
  }

  return (
    <main className="expense-tracker">
      <header className="page-header">
        <p className="eyebrow">YOUR MONEY, IN FOCUS</p>
        <h1>Expense tracker</h1>
        <p className="page-intro">Keep track of where your money goes.</p>
      </header>

      <div className="tracker-content">
        <section className="panel" aria-labelledby="add-expense-heading">
          <h2 id="add-expense-heading">Add an expense</h2>
          <ExpenseForm onAddExpense={addExpense} />
        </section>

        <section className="panel expense-history" aria-labelledby="expenses-heading">
          <div className="section-heading">
            <h2 id="expenses-heading">Recent expenses</h2>
            <span className="expense-count">{expenses.length}</span>
          </div>
          {expenses.length === 0 ? (
            <p className="empty-state">Your expenses will appear here.</p>
          ) : (
            <ul className="expense-list">
              {expenses.map((expense) => (
                <li className="expense-row" key={expense.id}>
                  <div>
                    <span className="expense-title">{expense.title}</span>
                    <span className="expense-category">{expense.category}</span>
                  </div>
                  <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
