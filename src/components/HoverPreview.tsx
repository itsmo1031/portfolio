'use client';

import useMousePosition from '@/hooks/useMousePosition';
import { useMousePositionStore } from '@/stores/useMousePositionStore';
import cn from '@/utils/cn';
import Image from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';

type HoverPreviewProps = {
  src: string;
} & ComponentPropsWithoutRef<'div'>;

const HoverPreview = ({ src, className }: HoverPreviewProps) => {
  useMousePosition();
  const mousePosition = useMousePositionStore((state) => state.position);

  return (
    <div
      className={cn(
        'fixed z-50 rounded-lg bg-white px-2 py-2 drop-shadow-lg',
        className,
      )}
      style={{
        left: `${mousePosition.x - 60}px`,
        top: `${mousePosition.y + 30}px`,
      }}
    >
      <Image src={src} width={120} height={63} alt="preview image" />
    </div>
  );
};

export default HoverPreview;
