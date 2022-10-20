import React from 'react';

type Props = {
  children: JSX.Element;
};

export default function DivStyled({ children }: Props) {
  return (
    <div className='lg:w-9/12 md:w-11/12 sm:w-full bg-white md:p-6 p-2 mx-auto'>
      {children}
    </div>
  );
}
