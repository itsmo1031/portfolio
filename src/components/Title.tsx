import cn from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

type TitleProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'h1'>;

const Title = ({ children, className }: TitleProps) => {
  return <h1 className={cn('text-5xl font-bold', className)}>{children}</h1>;
};

export default Title;
