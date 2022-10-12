import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../assets/globalVariables';
import SectionTitle from '../Layout/SectionTitle';
import LoadingMessage from '../Layout/LoadingMessage';
import ErrorMessage from '../Layout/ErrorMessage';
import TvShowElement from './TvShowElement';

export default function TvShowsList() {
  const [url, setUrl] = useState(`${BASE_URL}tv/popular?language=en-US`);
  const { data, loading, error, totalPages } = useFetch(url);
  return (
    <div className='sm:py-4 py-2'>
      <SectionTitle>TV Shows</SectionTitle>
      <>
        {loading ? (
          <LoadingMessage />
        ) : (
          <TvShowElement data={data} />
        )}
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </>
    </div>
  );
}
