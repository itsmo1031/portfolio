import CommonSection from './CommonSection';

const Hero = () => {
  return (
    <CommonSection className="my-[60px]">
      <h1 className="relative text-8xl font-bold leading-tight tracking-tighter lg:text-6xl sm:text-5xl">
        안녕하세요!
        <br />
        저는{' '}
        <div className="inline sm:block">
          <span className="bg-gradient-to-r from-primary via-secondary-500 to-primary bg-[length:400%_100%] bg-clip-text text-transparent">
            정필모
          </span>
          입니다.
        </div>
      </h1>
    </CommonSection>
  );
};

export default Hero;
