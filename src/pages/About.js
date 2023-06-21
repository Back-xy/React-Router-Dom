import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function About() {
  const [user, setUser] = useState('user');

  if (!user) {
    // replace: replaces the current path in history to the referer
    // meaning if we tried to go back to this page again, it will be replaced with referer
    // referer means the page that referenced this page to us
    return <Navigate to='/' replace={true} />;
  }

  return (
    <div className='about'>
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
