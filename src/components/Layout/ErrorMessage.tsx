import React from 'react';
import { PropsText } from '../../interfaces/commonInterfaces';

export default function ErrorMessage({ children }: PropsText) {
  return <h2 className='text-center text-2xl'>{children}</h2>;
}
