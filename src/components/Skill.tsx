import { Item } from '@/interfaces/Skill';

type SkillProps = {
  item: Item;
};

const Skill = ({ item }: SkillProps) => {
  return (
    <article
      key={item.name}
      className="flex flex-col gap-8 border-b border-[#EEEEEE] py-10"
    >
      <h3 className="text-[2rem] font-bold leading-8 tracking-tighter">
        {item.name}
      </h3>
      <ul className="list-inside list-disc leading-relaxed tracking-tight">
        {item.keynotes.map((keynote, index) => (
          <li key={index}>{keynote}</li>
        ))}
      </ul>
    </article>
  );
};

export default Skill;
