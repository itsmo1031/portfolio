import { Item } from '@/interfaces/Project';
import { getDateRangeToString } from '@/utils/date';
import Carousel from './Carousel';
import TechStack from './TechStack';

type ProjectProps = {
  item: Item;
};

const Project = ({ item }: ProjectProps) => {
  return (
    <section className="flex flex-col gap-5 border-b border-[#EEEEEE] py-10 md:grid-cols-1">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[2rem] font-bold leading-8">
            <h3 className="tracking-tighter">{item.name}</h3>
            {item.links?.git && (
              <div>
                <a
                  href={item.links.git}
                  target="_blank"
                  className="flex items-center text-3xl transition-colors duration-500 hover:text-primary"
                  rel="noreferrer"
                  aria-label="git repository link"
                >
                  <span
                    className="i-mdi-github"
                    role="img"
                    aria-hidden="true"
                  />
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="leading-tight tracking-tight">
              {getDateRangeToString(item.startedAt, item.endedAt)}
            </span>
            <span className="leading-tight tracking-tight">
              {item.position}
            </span>
          </div>
          <p className="leading-normal tracking-tight">{item.description}</p>
        </div>
      </div>
      {item.images && <Carousel images={item.images} />}
      <div className="grid grid-cols-2">
        <div>
          <h4 className="mb-2 text-2xl font-bold tracking-tighter">
            What did I do?
          </h4>
          <ul className="list-inside list-disc leading-relaxed tracking-tight">
            {item.keynotes.map((keynote, index) => (
              <li key={index}>{keynote}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-2xl font-bold tracking-tighter">
            Tech Stack
          </h4>
          <TechStack data={item.skills} />
        </div>
      </div>
    </section>
  );
};

export default Project;
