import Language from '@/components/Language';
import CommonSection from './CommonSection';
import Title from '@/components/Title';
import { Payload } from '@/interfaces/Language';

type LanguagesProps = {
  payload: Payload;
};

const Languages = ({ payload }: LanguagesProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="flex flex-col">
        <Title className="mb-5">Languages</Title>
        {payload.list.map((item) => (
          <Language item={item} key={item.name} />
        ))}
      </CommonSection>
    )
  );
};

export default Languages;
