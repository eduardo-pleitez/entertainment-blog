import React from 'react';
import { PropsReviewElement, PropsReviewsData } from '../../interfaces/commonInterfaces';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/accordion';

export default function ReviewsSection({data}:PropsReviewsData) {
  return (
    <div>
      <h2 className='lg:text-2xl text-lg text-center pt-2 pb-4'>Reviews</h2>
      <Accordion allowToggle className='lg:w-9/12 md:w-11/12 w-full mx-auto'>
        {data.results.map(({author, content, createdAt}: PropsReviewElement, index) => {
          return (
            <AccordionItem key={index}>
              <h3>
                <AccordionButton className='bg-black text-white p-2 border'>Review {index + 1}</AccordionButton>
              </h3>
              <AccordionPanel className='p-3 bg-gray-100'>
                <h4><span className='font-bold'>Author: </span>{author}</h4>
                <p className='py-2'>{content}</p>
                <p className='text-end'>{createdAt}</p>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

