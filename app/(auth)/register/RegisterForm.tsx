'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterForm() {
  const [newUser, setNewUser] = useState({
    number: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        newUser,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // const data: RegisterResponseBodyPost = await response.json();

    // if ('errors' in data) {
    //   setErrors(data.errors);
    //   return;
    // }

    // router.push(
    //   getSafeReturnToPath(props.returnTo) || `/profile/${data.user.number}`,
    // );

    router.refresh();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    // setErrors([]);

    setNewUser({
      ...newUser,
      [event.target.name]: value,
    });
  }

  return (
    <form
      onSubmit={async (event) => {
        // eslint error: no preventDefault() even though there is one in called function
        event.preventDefault();
        await handleRegister(event);
      }}
    >
      <label>
        race number
        <input
          required
          type="number"
          name="number"
          value={newUser.number}
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          required
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
      </label>
      <label>
        confirm password
        <input
          required
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleChange}
        />
      </label>

      <button>Register</button>
    </form>
  );
}
