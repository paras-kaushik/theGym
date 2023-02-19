import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
// I will use this form to add excercises
export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('');
  const [reps,setReps]=useState('');
  const [note,setNote]=useState('');
  const { addDocument, response } = useFirestore('transactions')

  const handleSubmit = (e) => {
    e.preventDefault();

    addDocument({
      uid,
      name,
      amount,
      reps,
      note,
    });
    setName('')
      setAmount('')
      setReps('');
      setNote('');
  }

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
      setReps('');
      setNote('');
    }
  }, [response.success])

  return (
    <>
      <h3>Add an Excercise</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Excercise name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Weight/Time:</span>
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <label>
          <span>Reps</span>
          <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
          />
        </label>
        <label>
          <span>Trainers Notes</span>
          <input
            type="text"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
        </label>
        <button>Add Excercise</button>
      </form>
    </>
  )
}
