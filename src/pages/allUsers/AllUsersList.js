

// styles
import styles from './AllUsers.module.css'

export default function AllUsersList({ transactions }) {
    console.log(transactions);
    return (
        <ul className={styles.transactions}>
            {transactions.map((transaction) => (
                <li key={transaction.id} style={{display:'flex',justifyContent:'space-between'}}>
                    <p className={styles.name}>{transaction.displayName}</p>

                    <div className={styles.avatar}>
                        <img src={transaction.photoURL} alt="Your image here" onClick={() => alert('workout bitch')} />
                    </div>

                </li>
            ))}
        </ul>
    )
}
