import { useState } from 'react';
import SkillButton from './TechStackButton';
import { AnimatePresence, motion } from 'framer-motion';
import { Skill } from '@/interfaces/Common';

const TechStack = ({ data }: { data?: Skill[] }) => {
  const [selectedStackIndex, setSelectedStackIndex] = useState<number>(-1);

  const handleClick = (index: number) => {
    if (selectedStackIndex === index) {
      setSelectedStackIndex(-1);
      return;
    }
    setSelectedStackIndex(index);
  };

  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {data?.map((skill, index) => (
          <li key={index} className="">
            {/* 스킬 키워드를 클릭할 수 있는 버튼으로 변경 */}
            <SkillButton
              onClick={() => handleClick(index)}
              isSelected={selectedStackIndex === index}
            >
              {skill.keyword}
            </SkillButton>
          </li>
        ))}
      </ul>
      <div className="mt-2 min-h-12">
        <AnimatePresence>
          {selectedStackIndex !== -1 && data && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {data[selectedStackIndex].description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TechStack;
