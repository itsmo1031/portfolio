import HoverPreview from './HoverPreview';

type PreviewLinkProps = {
  href: string;
  children: React.ReactNode;
  imgSrc: string;
};

const PreviewLink = ({ href, children, imgSrc }: PreviewLinkProps) => {
  return (
    <>
      <a
        target="_blank"
        className="peer relative text-primary underline underline-offset-4 transition-colors duration-500 hover:text-secondary-500"
        href={href}
      >
        {children}
      </a>
      <HoverPreview src={imgSrc} className="hidden peer-hover:block" />
    </>
  );
};

export default PreviewLink;
