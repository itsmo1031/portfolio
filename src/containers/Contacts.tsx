import Contact from '@/components/Contact';
import CommonSection from './CommonSection';
import Title from '@/components/Title';
import { Payload } from '@/interfaces/Contact';

type ContactsProps = {
  payload: Payload;
};

const Contacts = ({ payload }: ContactsProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="my-20 flex w-full flex-col items-center justify-center">
        <Title className="mb-5">Get in Touch</Title>
        <ul className="flex list-none items-center justify-around py-10 text-4xl leading-[100%]">
          {payload.list.map((item) => (
            <Contact item={item} key={item.name} />
          ))}
        </ul>
      </CommonSection>
    )
  );
};

export default Contacts;
