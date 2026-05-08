import { Payload } from '@/interfaces/Job';

const jobs: Payload = {
  list: [
    {
      company: 'IBK시스템',
      location: '서울, 대한민국',
      position: '대리',
      startedAt: '2024. 11.',
      works: [
        {
          title: 'KDB캐피탈 차세대 프로젝트',
          description:
            'KDB캐피탈 업무시스템의 차세대 프로젝트에 참여하여 오토금융 사후관리 파트를 주로 맡아 개발하였습니다.',
          keynotes: [
            '오토금융 사후 불건전채권 입/지급 관리 화면 및 서비스 개발',
            '오토금융 자동차 보험 사고관리 화면 및 서비스 개발',
            '오토금융 자산 회수/매각관리 화면 및 서비스 개발',
            '오토금융 여신 마감건 결재 관리 화면 및 서비스 개발',
            '오토금융 원리금 수납원장 메일 발송 배치 서비스 개발',
          ],
          startedAt: '2025. 05.',
          skills: [
            {
              keyword: 'Spring Boot',
            },
            {
              keyword: 'iFramework',
              description:
                'IBK시스템의 기업용 애플리케이션 개발 프레임워크입니다.',
            },
            {
              keyword: 'Oracle',
            },
          ],
        },
        {
          title: '전세자금대출용 권리조사 업무시스템 개발',
          description: '',
          startedAt: '2024. 11.',
          endedAt: '2025. 04.',
          skills: [
            {
              keyword: 'Spring Boot',
            },
            {
              keyword: 'Thymeleaf',
            },
            {
              keyword: 'jQuery',
            },
          ],
        },
      ],
    },
    {
      company: 'W&W Concept Inc.',
      location: 'Vernon, CA, USA',
      position: 'IT Intern',
      startedAt: '2018. 10.',
      endedAt: '2019. 10.',
      works: [
        {
          title: 'ERP - PLM Data Sync API',
          description:
            '사용 중이던 외부 PLM의 데이터를 받아 가공하여 신규 개발 중이던 Cloud-based ERP에 연동하는 REST API를 설계하고 개발했습니다.',
          keynotes: [
            'Sequelize ORM을 활용해 PostgreSQL에 입력될 데이터의 모델 작성',
            'Logging, Error Handling을 위한 Middleware 작성',
            '받아 온 데이터를 가공/통합한 뒤 저장하기 위한 라이브러리 작성',
            'API Endpoint별로 연동 작업을 수행하기 위한 컨트롤러 작성',
            'Swagger를 활용한 API Endpoint 문서화',
            'Typedoc을 활용한 라이브러리 문서화',
            'Gulp로 Pug/SCSS/Typescript 컴파일 자동화',
          ],
          startedAt: '2019. 07.',
          endedAt: '2019. 10.',
          skills: [
            {
              keyword: 'Typescript',
              description:
                '데이터 타입 명시로 컴파일 시점에 에러를 발견하여 코드 안전성을 높이기 위해 사용하였습니다.',
            },
            {
              keyword: 'Node.js',
              description:
                '자바스크립트 생태계가 익숙하고, 풍부한 오픈 소스 라이브러리를 보유하고 있어 사용하였습니다.',
            },
            {
              keyword: 'Express.js',
              description:
                'REST API를 제작하기 위해 도입한 프레임워크로 가볍고 유연한 구성이 가능하여 사용하였습니다.',
            },
            {
              keyword: 'Sequelize',
              description:
                'DB 객체 조작을 Typescript 언어로 가능하게 하고, SQL Injection을 방지할 수 있어 사용하였습니다.',
            },
            {
              keyword: 'Swagger',
              description:
                'API Endpoint를 주석으로 손쉽게 문서화할 수 있어서 사용하였습니다.',
            },
            {
              keyword: 'Typedoc',
              description:
                '직접 작성한 라이브러리를 주석을 사용하여 문서화하기 위해 사용하였습니다.',
            },
            {
              keyword: 'Gulp',
              description:
                'Pug, SCSS, Typescript 컴파일 작업을 자동화하기 위해 사용하였습니다.',
            },
          ],
        },
      ],
    },
  ],
};

export default jobs;
