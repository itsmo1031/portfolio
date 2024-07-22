import CommonSection from './CommonSection';
import Image from 'next/image';

const Hero = () => {
  return (
    <CommonSection className="my-[60px]">
      <h1 className="relative text-8xl font-bold leading-tight tracking-tighter lg:text-6xl sm:text-5xl">
        안녕하세요!
        <Image
          src="/waving-hand.png"
          width={100}
          height={100}
          alt="waving-hand"
          className="inline -translate-y-4 lg:size-16 sm:size-12 sm:-translate-y-2"
          unoptimized
          priority
        />
        <br />
        저는{' '}
        <div className="inline sm:block">
          <span className="animate-gradient bg-gradient-to-r from-primary via-secondary-500 to-primary bg-[length:400%_100%] bg-clip-text text-transparent">
            정필모
          </span>
          입니다.
        </div>
      </h1>
    </CommonSection>
  );
};

export default Hero;
