import { Payload } from '@/interfaces/Skill';

const Skill = ({ payload }: { payload: Payload }) => {
  return (
    <>
      {!payload.disabled &&
        payload.list.map((item, index) => (
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
        ))}
    </>
  );
};

export default Skill;
