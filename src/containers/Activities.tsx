import Activity from '@/components/Activity';
import CommonSection from './CommonSection';
import Title from '@/components/Title';
import { Payload } from '@/interfaces/Activity';

type ActivitiesProps = {
  payload: Payload;
};

const Activities = ({ payload }: ActivitiesProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="flex flex-col">
        <Title className="mb-5">Activities</Title>
        {payload.list.map((item) => (
          <Activity item={item} key={item.name} />
        ))}
      </CommonSection>
    )
  );
};

export default Activities;
