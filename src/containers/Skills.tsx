import Skill from '@/components/Skill';
import CommonSection from './CommonSection';
import Title from '@/components/Title';
import { Payload } from '@/interfaces/Skill';

type SkillsProps = {
  payload: Payload;
};

const Skills = ({ payload }: SkillsProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="flex flex-col">
        <Title className="mb-5">Skills</Title>
        {payload.list.map((item) => (
          <Skill item={item} key={item.name} />
        ))}
      </CommonSection>
    )
  );
};

export default Skills;
