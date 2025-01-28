'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterForm() {
  const [newCourier, setNewCourier] = useState({
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
        newCourier,
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

    setNewCourier({
      ...newCourier,
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
          className="style: border 1px"
          required
          type="number"
          name="number"
          value={newCourier.number}
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          className="style: border 1px"
          required
          type="password"
          name="password"
          value={newCourier.password}
          onChange={handleChange}
        />
      </label>
      <label>
        confirm password
        <input
          className="style: border 1px"
          required
          type="password"
          name="confirmPassword"
          value={newCourier.confirmPassword}
          onChange={handleChange}
        />
      </label>

      <button>Register</button>
    </form>
  );
}
