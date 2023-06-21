import { Form, redirect, useActionData } from 'react-router-dom';

export default function Contact() {
  const data = useActionData();
  return (
    <div className='contact'>
      <h3>Contact Us</h3>
      <Form method='post' action='/help/contact'>
        <label>
          <span>Your email:</span>
          <input type='email' name='email' />
        </label>
        <label>
          <span>Your message:</span>
          {data && data.messageError && (
            <p style={{ color: 'red', marginTop: '0' }}>{data.messageError}</p>
          )}
          <textarea name='message'></textarea>
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const form = await request.formData();

  const data = {
    email: form.get('email'),
    message: form.get('message'),
  };

  // handle your post request
  if (data.message.length < 10) {
    return { messageError: 'Message should be more than 10 characters!' };
  }

  // redirect
  return redirect('/');
};
