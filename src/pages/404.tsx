import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <main className='absolute inset-0 flex flex-col justify-center items-center bg-gray-900'>
      <h2 className='text-white text-2xl mb-3'>Page not found</h2>
      <h1 className='sm:text-9xl text-7xl font-extrabold text-white tracking-widest'>
        404
      </h1>
      <Link to='/'>
        <button className='mt-5 p-5 text-white border border-white'>
          Go Home
        </button>
      </Link>
    </main>
  );
}
