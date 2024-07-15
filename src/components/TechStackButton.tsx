import cn from '@/utils/cn';
import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

type TechStackButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
} & ComponentPropsWithoutRef<'button'>;

const TechStackButton = ({
  children,
  onClick,
  isSelected,
  className,
}: TechStackButtonProps) => {
  return (
    <button
      className={cn(
        'border-primary before:bg-primary hover:before:bg-primary relative overflow-hidden rounded-full border px-3 py-1 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-300 hover:text-white hover:before:left-0 hover:before:w-full',
        isSelected ? 'bg-primary text-white' : 'text-primary bg-white',
        className,
      )}
      onClick={onClick} // 클릭 시 상태 업데이트
    >
      <span className="relative text-sm font-semibold text-inherit">
        {children}
      </span>
    </button>
  );
};

export default TechStackButton;
