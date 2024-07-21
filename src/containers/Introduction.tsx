'use client';

import CommonSection from './CommonSection';
import { RoughNotation } from 'react-rough-notation';
import Image from 'next/image';
import PreviewLink from '@/components/PreviewLink';

const Introduction = () => {
  return (
    <>
      <CommonSection className="flex flex-col gap-10 text-[32px] sm:text-xl">
        <section className="flex flex-col gap-5">
          <h2 className="font-bold leading-[100%] tracking-tight">
            <RoughNotation
              type="highlight"
              color="hsl(219, 89%, 48%, 40%)"
              animationDelay={0}
              show={true}
            >
              효율적인 성장
            </RoughNotation>
            <Image
              className="inline-block -rotate-45 animate-launch sm:size-5"
              src="/rocket.png"
              alt="rocket"
              width={38}
              height={38}
              unoptimized
            />
            을 위해 항상 고민합니다.
          </h2>
          <div className="font-regular leading-tight tracking-tight sm:text-base">
            성장을 최우선 가치로 두고, 매주 회고하며 성장 기회를 찾습니다.
            <br />
            빠르게 학습하고, 새롭게 알게 된 지식을 활용하는 것을 좋아합니다.
            <br />
            주변 지인과{' '}
            <PreviewLink href="https://itsmo.dev/" imgSrc="/blog.png">
              블로그
            </PreviewLink>
            에 지식을 나누며 함께 성장하는 것을 좋아합니다.
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="font-bold leading-[100%] tracking-tight">
            <RoughNotation
              type="highlight"
              color="hsl(36, 100%, 65%, 60%)"
              animationDelay={1500}
              show={true}
            >
              사용자 경험
            </RoughNotation>
            <Image
              className="inline-block -translate-y-4"
              src="/star.png"
              alt="star"
              width={30}
              height={30}
              unoptimized
            />
            을 중요하게 생각합니다.
          </h2>
          <div className="font-regular leading-tight tracking-tight sm:text-base">
            소프트웨어의 가치는 가치 있는 사용자 경험에서 나온다고 믿습니다.
            <br />
            아름다운 UI/UX를 항상 탐색하고, 이를 구현하는 일을 좋아합니다.
          </div>
        </section>
      </CommonSection>
    </>
  );
};

export default Introduction;
