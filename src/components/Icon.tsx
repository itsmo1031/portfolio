import cn from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

type IconProps = {
  name: string;
} & ComponentPropsWithoutRef<'span'>;

const iconClass: { [key: string]: string } = {
  Email: 'i-flowbite-envelope-outline',
  Blog: 'i-flowbite-pen-nib-outline',
  LinkedIn: 'i-flowbite-linkedin-solid',
  GitHub: 'i-flowbite-github-solid',
  Twitter: 'i-flowbite-x-company-solid',
};

const Icon = ({ name, className }: IconProps) => {
  return (
    <span
      className={cn(iconClass[name] || 'i-flowbite-link-solid', className)}
      role="img"
      aria-hidden="true"
    />
  );
};

export default Icon;
