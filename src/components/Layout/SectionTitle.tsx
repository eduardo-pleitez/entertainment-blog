import React from 'react';
import { PropsText } from '../../interfaces/commonInterfaces';

export default function SectionTitle({ children }: PropsText) {
  return <h1 className='text-center text-3xl py-2'>{children}</h1>;
}
