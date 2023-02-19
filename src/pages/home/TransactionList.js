import { useFirestore } from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions')

  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
         <li key={transaction.id}>
          <div style={{width:'100%'}}>
          <div className={styles['excercise-info']} style={{display:'flex'}}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>{transaction.amount}</p>
            <p className={styles.amount}>{transaction.reps} reps</p>
          </div>
          <p style={{textAlign:'right'}} >{transaction.note}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
