import { Item } from '@/interfaces/Certificate';
import { getDateRangeToString } from '@/utils/date';

type CertificateProps = {
  item: Item;
};

const Certificate = ({ item }: CertificateProps) => {
  return (
    <article className="flex flex-col gap-5 border-b border-[#EEEEEE] py-10">
      <section className="flex flex-col gap-2.5 sm:gap-1">
        <h2 className="text-[2rem] font-bold leading-8 tracking-tighter sm:text-2xl sm:leading-6">
          {item.name}
        </h2>
        <div className="flex flex-col">
          <span className="leading-tight tracking-tight">
            {getDateRangeToString(item.validFrom, item.validThru)}
          </span>
          <span className="leading-tight tracking-tight">{item.issuer}</span>
        </div>
      </section>
    </article>
  );
};

export default Certificate;
