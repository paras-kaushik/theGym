import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// styles
import styles from './AllUsers.module.css'
import AllUsersList from './AllUsersList';

// components


export default function AllUsers() {
  const { user } = useAuthContext();
//   const { documents, error } = useCollection(
//     'transactions', ["uid", "==", user.uid], ['createdAt', 'desc']
//   );
  const { documents, error } = useCollection('users');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <AllUsersList transactions={documents} />}
      </div>
    </div>

  )
}
