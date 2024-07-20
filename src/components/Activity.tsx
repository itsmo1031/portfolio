import { Item } from '@/interfaces/Activity';
import { getDateRangeToString } from '@/utils/date';

type ActivityProps = {
  item: Item;
};

const Activity = ({ item }: ActivityProps) => {
  return (
    <article className="flex flex-col gap-5 border-b border-[#EEEEEE] py-10">
      <section className="flex flex-col gap-2.5">
        <h3 className="text-[2rem] font-bold leading-8 tracking-tighter">
          {item.name}
        </h3>
        <div className="flex flex-col">
          <span className="leading-tight tracking-tight">
            {getDateRangeToString(item.startedAt, item.endedAt)}
          </span>
          <span className="leading-tight tracking-tight">{item.position}</span>
        </div>
      </section>
      <p>{item.description}</p>
    </article>
  );
};

export default Activity;
