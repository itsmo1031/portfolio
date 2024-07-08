import Title from '@/components/Title';
import CommonSection from './CommonSection';
import Job from '@/components/Job';
import jobs from '@/contents/jobs';

const Jobs = () => {
  return (
    <CommonSection className="flex flex-col gap-[3.75rem]">
      <Title>Work Experience</Title>
      <Job payload={jobs}></Job>
    </CommonSection>
  );
};

export default Jobs;
