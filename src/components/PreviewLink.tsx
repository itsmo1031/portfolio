import HoverPreview from './HoverPreview';

type PreviewLinkProps = {
  href: string;
  children: React.ReactNode;
};

const PreviewLink = ({ href, children }: PreviewLinkProps) => {
  return (
    <>
      <a
        target="_blank"
        className="peer relative text-primary underline underline-offset-4 transition-colors duration-500 hover:text-secondary-500"
        href={href}
      >
        {children}
      </a>
      <HoverPreview src="/blog.png" className="hidden peer-hover:block" />
    </>
  );
};

export default PreviewLink;
