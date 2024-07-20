import Edu from '@/components/Education';
import CommonSection from './CommonSection';
import Title from '@/components/Title';
import { Payload } from '@/interfaces/Education';

type EducationProps = {
  payload: Payload;
};

const Education = ({ payload }: EducationProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="flex flex-col">
        <Title className="mb-5">Education</Title>
        {payload.list.map((item) => (
          <Edu item={item} key={item.name} />
        ))}
      </CommonSection>
    )
  );
};

export default Education;
