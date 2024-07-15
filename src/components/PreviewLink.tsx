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
        className="peer relative text-[#929292] underline underline-offset-4 hover:text-[#6e6e6e]"
        href={href}
      >
        {children}
      </a>
      <HoverPreview src="/blog.png" className="hidden peer-hover:block" />
    </>
  );
};

export default PreviewLink;
