import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import { useState } from 'react';

import DownArrow from './downArrow';

export interface FAQSchema {
  [key: string]: string | undefined;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQSchema[] = [
  {
    question: 'Do you bill annually or monthly?',
    answer:
      'No, Linq offers custom-branded digital wallet cards containing your branding, employee details, and a Linq QR code.',
  },
  {
    question: 'How do I cancel my plan?',
    answer:
      'No, Linq offers custom-branded digital wallet cards containing your branding, employee details, and a Linq QR code.',
  },
  {
    question: 'Do you charge new features or integration?',
    answer:
      'No, Linq offers custom-branded digital wallet cards containing your branding, employee details, and a Linq QR code.',
  },
  {
    question: ' Can team admins build profiles ahead of time?',
    answer:
      'No, Linq offers custom-branded digital wallet cards containing your branding, employee details, and a Linq QR code.',
  },
  {
    question: ' Can we reuse a product if the employees leaves?',
    answer:
      'No, Linq offers custom-branded digital wallet cards containing your branding, employee details, and a Linq QR code.',
  },
  {
    question: ' Does Teams require using physical products?',
    answer:
      'No, Linq offers custom-branded digital wallet cards containing your branding, employee details, and a Linq QR code.',
  },
];

const Questions = () => {
  const [open, setOpen] = useState<number>(0);
  const handleOpen = (value: number) => setOpen(open === value ? -1 : value);

  return (
    <div className="mx-auto max-w-3xl	px-6 sm:px-8">
      {FAQ_DATA.map((faq, index) => {
        const { question, answer } = faq;
        return (
          <div
            key={question}
            className="mb-6 rounded-lg border-2 border-[#DFE1EE]"
          >
            <Accordion
              open={open === index}
              icon={<DownArrow id={index} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === index ? 'rounded-t-lg ' : 'rounded-lg'
                } h-[60px] border-none bg-[#F6F8FF] p-2 px-4 text-base text-[#40455D] sm:h-[70px] lg:p-4 lg:px-8 lg:text-2xl`}
                onClick={() => handleOpen(index)}
              >
                {question}
              </AccordionHeader>
              <AccordionBody>
                <p className="p-2 text-base sm:px-8 sm:text-xl">{answer}</p>
              </AccordionBody>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};
export default Questions;
