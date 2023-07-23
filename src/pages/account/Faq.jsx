import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getFaqs } from '../../redux/reducers/faqSlice';
import { fetchFaqs } from '../../redux/actions/others';

const Faq = () => {
  const dispatch = useDispatch();
  const faqs = useSelector(getFaqs);

  useEffect(() => {
    dispatch(fetchFaqs());
  }, []);
  return (
    <>
      <div className="p-4">
        <p>Faq</p>
        <div className="my-4">
          {(faqs || []).map((faq, i) => (
            <div className="p-2 dark-shadow-md my-2 cursor-pointer border rounded-md">
              <p className="font-bold hover:text-red-500 my-2">
                {faq.question}
              </p>
              <p className="text-sm text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Faq;
