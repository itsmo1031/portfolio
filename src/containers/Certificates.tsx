import Certificate from '@/components/Certificate';
import CommonSection from './CommonSection';
import Title from '@/components/Title';
import { Payload } from '@/interfaces/Certificate';

type CertificatesProps = {
  payload: Payload;
};

const Certificates = ({ payload }: CertificatesProps) => {
  return (
    !payload.disabled && (
      <CommonSection className="flex flex-col">
        <Title className="mb-5">Certificates</Title>
        {payload.list.map((item) => (
          <Certificate item={item} key={item.name} />
        ))}
      </CommonSection>
    )
  );
};

export default Certificates;
