import { useState } from 'react'

const categories = ['Food', 'Travel', 'Bills', 'Other']

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const numericAmount = Number(amount)

    if (!trimmedTitle) {
      setError('Enter an expense title.')
      return
    }

    if (amount.trim() === '' || !Number.isFinite(numericAmount)) {
      setError('Enter a numeric amount.')
      return
    }

    if (numericAmount <= 0) {
      setError('Amount must be greater than zero.')
      return
    }

    onAddExpense({ title: trimmedTitle, amount: numericAmount, category })
    setTitle('')
    setAmount('')
    setCategory(categories[0])
    setError('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="expense-title">Expense title</label>
        <input
          id="expense-title"
          name="title"
          type="text"
          placeholder="e.g. Weekly groceries"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={Boolean(error && !title.trim())}
          aria-describedby={error ? 'expense-form-error' : undefined}
          data-cy="expense-title"
        />
      </div>

      <div className="form-field">
        <label htmlFor="expense-amount">Amount</label>
        <div className="amount-input-wrap">
          <span aria-hidden="true">$</span>
          <input
            id="expense-amount"
            name="amount"
            type="text"
            inputMode="decimal"
            placeholder="0.00"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            aria-invalid={Boolean(error && (amount.trim() === '' || !Number.isFinite(Number(amount)) || Number(amount) <= 0))}
            aria-describedby={error ? 'expense-form-error' : undefined}
            data-cy="expense-amount"
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="expense-category">Category</label>
        <select
          id="expense-category"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          data-cy="expense-category"
        >
          {categories.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {error && <p className="form-error" id="expense-form-error" role="alert">{error}</p>}

      <button className="submit-button" type="submit" data-cy="add-expense">
        Add expense <span aria-hidden="true">↗</span>
      </button>
    </form>
  )
}

export default ExpenseForm
