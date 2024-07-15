'use client';

import Title from '@/components/Title';
import CommonSection from './CommonSection';
import { Payload } from '@/interfaces/Project';
import Project from '@/components/Project';

type ProjectsProps = {
  payload: Payload;
};

const Projects = ({ payload }: ProjectsProps) => {
  return (
    !payload.disabled && (
      <CommonSection>
        <Title>Projects</Title>
        {payload.list.map((item) => (
          <Project item={item} key={item.name} />
        ))}
      </CommonSection>
    )
  );
};

export default Projects;
