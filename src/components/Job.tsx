'use client';

import { Item, Work } from '@/interfaces/Job';
import { getDateRangeToString } from '@/utils/date';
import TechStack from './TechStack';

type JobProps = {
  item: Item;
};

const Job = ({ item }: JobProps) => {
  return (
    <section className="grid grid-cols-3 gap-2.5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="text-[2rem] font-bold leading-8 tracking-tighter">
            {item.company}
          </h3>
          <span className="leading-tight tracking-tight">{item.location}</span>
        </div>
        <div className="flex flex-col">
          <span className="leading-tight tracking-tight">
            {getDateRangeToString(item.startedAt, item.endedAt)}
          </span>
          <span className="leading-tight tracking-tight">{item.position}</span>
        </div>
      </div>
      <div className="col-span-2">
        {item.works.map((work: Work) => (
          <div key={work.title} className="flex flex-col gap-5">
            <div>
              <h3 className="text-[2rem] font-bold leading-8 tracking-tighter">
                {work.title}
              </h3>
              <span className="leading-tight tracking-tight">
                {getDateRangeToString(work.startedAt, work.endedAt)}
              </span>
              <p className="mt-2.5 leading-normal tracking-tight">
                {work.description}
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-2xl font-bold tracking-tighter">
                What did I do?
              </h4>
              <ul className="list-inside list-disc leading-relaxed tracking-tight">
                {work.keynotes.map((keynote, index) => (
                  <li key={index}>{keynote}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-2xl font-bold tracking-tighter">
                Tech Stack
              </h4>
              <TechStack data={work.skills} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Job;
