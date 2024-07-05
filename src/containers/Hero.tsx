import CommonSection from './CommonSection';
import Image from 'next/image';

const Hero = () => {
  return (
    <CommonSection className="my-[60px]">
      <h1 className="relative text-[96px] font-bold leading-tight tracking-tighter lg:ps-6 lg:text-[3.5rem]">
        안녕하세요!
        <Image
          src="/waving-hand.png"
          width={100}
          height={100}
          alt="waving-hand"
          className="inline -translate-y-4"
        />
        <br />
        저는{' '}
        <span className="animate-gradient bg-gradient-to-r from-[#0E5BE7] via-pink-500 to-[#0E5BE7] bg-[length:400%_100%] bg-clip-text text-transparent">
          정필모
        </span>
        입니다.
      </h1>
    </CommonSection>
  );
};

export default Hero;
