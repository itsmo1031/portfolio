import { Skill } from '@/interfaces/Job';
import { useState } from 'react';
import SkillButton from './SkillButton';
import { AnimatePresence, motion } from 'framer-motion';

const Skills = ({ data }: { data?: Skill[] }) => {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(-1);

  const handleClick = (index: number) => {
    if (selectedSkillIndex === index) {
      setSelectedSkillIndex(-1);
      return;
    }
    setSelectedSkillIndex(index);
  };

  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {data?.map((skill, index) => (
          <li key={index} className="">
            {/* 스킬 키워드를 클릭할 수 있는 버튼으로 변경 */}
            <SkillButton
              onClick={() => handleClick(index)}
              isSelected={selectedSkillIndex === index}
            >
              {skill.keyword}
            </SkillButton>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {selectedSkillIndex !== -1 && data && (
          <motion.p
            className="mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {data[selectedSkillIndex].description}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
};

export default Skills;
