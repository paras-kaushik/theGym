import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail,setThumbnail]=useState('');
  const [thumbnailError,setThumbnailError]=useState(null);
  const { signup, isPending, error } = useSignup();// hook use

  const handleFileChange=(e)=>{
    e.preventDefault();
    setThumbnail(null);
    let selected=e.target.files[0];
    console.log(selected);
    if(!selected){
      setThumbnailError('Please upload a profile pic');
      return;
    }
    if(!selected.type.includes('image')){
      setThumbnailError('Dude the file you selected is not an image');
      return;
    }
    // if(selected.size >100000){
    //   setThumbnailError('File image size too large');
    //   return;
    // }
    setThumbnailError(null);
    setThumbnail(selected);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName,thumbnail);
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Profile Picture</span>
        <input type="file"
        required
        onChange={handleFileChange}
        />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      { !isPending && <button className="btn">sign up</button> }
      { isPending && <button className="btn" disabled>loading</button> }
      { error && <p>{error}</p> }
    </form>
  )
}
