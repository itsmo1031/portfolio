import { Item } from '@/interfaces/Language';
import { getDateRangeToString } from '@/utils/date';

type LanguageProps = {
  item: Item;
};

const Language = ({ item }: LanguageProps) => {
  return (
    <article className="flex flex-col gap-5 border-b border-[#EEEEEE] py-10">
      <section className="flex flex-col gap-2.5">
        <h3 className="text-[2rem] font-bold leading-8 tracking-tighter">
          {item.name}
        </h3>
        <div className="flex flex-col">
          <span className="leading-tight tracking-tight">
            {getDateRangeToString(item.validFrom, item.validThru)}
          </span>
        </div>
      </section>
    </article>
  );
};

export default Language;