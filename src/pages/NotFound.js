import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <center>
        {/* {status, statusText, internal, data, error}) */}
        {/* <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.data || error.message}</i>
        </p> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>404 - PAGE NOT FOUND</h1>
        <br />
        <h4>
          <Link to='/'>Go Back</Link>
        </h4>
      </center>
    </div>
  );
}
