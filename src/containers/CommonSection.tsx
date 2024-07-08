import cn from '@/utils/cn';
import React, { ComponentPropsWithoutRef } from 'react';

type CommonSectionProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'section'>;

const CommonSection = (props: CommonSectionProps) => {
  return (
    <section
      className={cn('mb-20 max-w-[920px] lg:max-w-[700px]', props.className)}
    >
      {props.children}
    </section>
  );
};

export default CommonSection;
