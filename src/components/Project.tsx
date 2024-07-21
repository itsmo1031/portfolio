import { Item } from '@/interfaces/Project';
import { getDateRangeToString } from '@/utils/date';
import Carousel from './Carousel';
import TechStack from './TechStack';
import Icon from './Icon';

type ProjectProps = {
  item: Item;
};

const Project = ({ item }: ProjectProps) => {
  return (
    <section className="flex flex-col gap-10 border-b border-[#EEEEEE] py-14">
      <div className="flex flex-col gap-3 sm:gap-1">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[2rem] font-bold leading-8">
            <h3 className="tracking-tighter">
              {item.links?.site ? (
                <a
                  href={item.links.site}
                  target="_blank"
                  className="text-primary underline underline-offset-4 transition-colors duration-500 hover:text-secondary-500"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </h3>
            {item.links?.git && (
              <div>
                <a
                  href={item.links.git}
                  target="_blank"
                  className="flex items-center text-3xl transition-colors duration-500 hover:text-primary"
                  rel="noopener noreferrer"
                  aria-label="git repository link"
                >
                  <Icon name="GitHub" />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2.5 sm:grid-cols-1">
          <div className="col-span-2 flex flex-col">
            <span className="leading-tight tracking-tight">
              {getDateRangeToString(item.startedAt, item.endedAt)}
            </span>
            <span className="leading-tight tracking-tight">
              {item.position}
            </span>
          </div>
          <p className="col-span-3 leading-normal tracking-tight">
            {item.description}
          </p>
        </div>
      </div>
      {item.images && <Carousel images={item.images} />}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-1">
        <div>
          <h4 className="mb-2 text-2xl font-bold tracking-tighter">
            What did I do?
          </h4>
          <ul className="list-inside list-disc leading-relaxed tracking-tight sm:leading-snug">
            {item.keynotes.map((keynote, index) => (
              <li key={index} className="sm:mb-1">
                {keynote}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          {item.articles && (
            <div>
              <h4 className="mb-2 text-2xl font-bold tracking-tighter">
                Article
              </h4>
              <ul className="list-inside list-disc leading-relaxed tracking-tight sm:leading-snug">
                {item.articles.map((article, index) => (
                  <li key={index} className="sm:mb-1">
                    <a
                      href={article.href}
                      target="_blank"
                      className="text-primary underline-offset-4 transition-colors duration-500 hover:text-secondary-500 hover:underline"
                      rel="noopener noreferrer"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="mb-2 text-2xl font-bold tracking-tighter">
              Tech Stack
            </h4>
            <TechStack data={item.skills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
