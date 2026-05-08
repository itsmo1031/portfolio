import CommonSection from './CommonSection';
import Image from 'next/image';

const Hero = () => {
  return (
    <CommonSection className="my-[60px]">
      <h1 className="relative text-8xl leading-tight font-bold tracking-tighter sm:text-5xl lg:text-6xl">
        안녕하세요!
        <Image
          src="/waving-hand.png"
          width={100}
          height={100}
          alt="waving-hand"
          className="inline -translate-y-4 sm:size-12 sm:-translate-y-2 lg:size-16"
          unoptimized
          priority
        />
        <br />
        저는{' '}
        <div className="inline sm:block">
          <span className="animate-gradient from-primary via-secondary-500 to-primary bg-gradient-to-r bg-[length:400%_100%] bg-clip-text text-transparent">
            정필모
          </span>
          입니다.
        </div>
      </h1>
    </CommonSection>
  );
};

export default Hero;
