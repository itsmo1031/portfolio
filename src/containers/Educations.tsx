import Education from '@/components/Education';
import CommonSection from './CommonSection';
import Title from '@/components/Title';
import { Payload } from '@/interfaces/Education';

type EducationsProps = {
  payload: Payload;
};

const Educations = ({ payload }: EducationsProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="flex flex-col">
        <Title className="mb-5">Education</Title>
        {payload.list.map((item) => (
          <Education item={item} key={item.name} />
        ))}
      </CommonSection>
    )
  );
};

export default Educations;
