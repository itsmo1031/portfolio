import Skill from '@/components/Skill';
import skills from '@/contents/skills';
import CommonSection from './CommonSection';
import Title from '@/components/Title';

const Skills = () => {
  return (
    <CommonSection className="flex flex-col">
      <Title className="mb-5">Skills</Title>
      <Skill payload={skills} />
    </CommonSection>
  );
};

export default Skills;
