import Title from '@/components/Title';
import CommonSection from './CommonSection';
import Job from '@/components/Job';
import { Payload } from '@/interfaces/Job';

type JobsProps = {
  payload: Payload;
};

const Jobs = ({ payload }: JobsProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="flex flex-col gap-[3.75rem]">
        <Title>Work Experience</Title>
        {payload.list.map((item) => (
          <Job item={item} key={`${item.company}-${item.startedAt}`} />
        ))}
      </CommonSection>
    )
  );
};

export default Jobs;
