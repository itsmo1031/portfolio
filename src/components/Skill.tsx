import { Item } from '@/interfaces/Skill';

type SkillProps = {
  item: Item;
};

const Skill = ({ item }: SkillProps) => {
  return (
    <article className="flex flex-col gap-8 border-b border-[#EEEEEE] py-10 sm:gap-4">
      <h2 className="text-[2rem] font-bold leading-8 tracking-tighter sm:text-2xl">
        {item.name}
      </h2>
      <ul className="list-inside list-disc leading-relaxed tracking-tight sm:leading-snug">
        {item.keynotes.map((keynote, index) => (
          <li key={index} className="sm:mb-1">
            {keynote}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Skill;
