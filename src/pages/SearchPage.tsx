import React, { useState, useRef } from 'react';
import PageLayout from '../components/Layout/PageLayout';
import { BASE_URL } from '../assets/globalVariables';
import SearchList from '../components/Search/SearchList';

export default function SearchPage() {
  const [url, setUrl] = useState(
    `${BASE_URL}search/multi?query=''&language=en-US`
  );
  const [text, setText] = useState('');
  const textRef = useRef('');

  const handleSearch = () => {
    const trimText = text.trim();
    if (trimText != '') {
      setUrl(`${BASE_URL}search/multi?query=${trimText}&language=en-US`);
      textRef.current = trimText;
    }
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  return (
    <PageLayout>
      <div>
        <div className='mx-auto p-6 flex lg:w-1/2 sm:flex-row flex-col sm:items-center items-start justify-evenly'>
          <label className='font-bold ' htmlFor='inputSearchMulti'>
            Search content:{' '}
          </label>
          <input
            className='border border-black sm:w-1/2 p-2 my-2 w-full'
            type='text'
            name='inputSearchText'
            id='inputSeachText'
            onChange={handleChange}
          />
          <input
            className='text-white bg-black p-2 cursor-pointer rounded sm:w-auto w-full'
            type='button'
            value='Search'
            onClick={handleSearch}
          />
        </div>
        <SearchList url={url} setUrl={setUrl} textRef={textRef} />
      </div>
    </PageLayout>
  );
}
