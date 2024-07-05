import HoverPreview from './HoverPreview';

type PreviewLinkProps = {
  href: string;
  children: React.ReactNode;
};

const PreviewLink = ({ href, children }: PreviewLinkProps) => {
  return (
    <>
      <a target="_blank" className="peer relative text-[#929292]" href={href}>
        {children}
      </a>
      <HoverPreview src="/blog.png" className="hidden peer-hover:block" />
    </>
  );
};

export default PreviewLink;
