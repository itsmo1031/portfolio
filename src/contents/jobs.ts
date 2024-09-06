import { Payload } from "@/interfaces/Job";

const jobs: Payload = {
  list: [
    {
      company: "W&W Concept Inc.",
      location: "Vernon, CA, USA",
      position: "IT Intern",
      startedAt: "2018. 10.",
      endedAt: "2019. 10.",
      works: [
        {
          title: "ERP - PLM Data Sync API",
          description: "사용 중이던 외부 PLM의 데이터를 받아 가공하여 신규 개발 중이던 Cloud-based ERP에 연동하는 REST API를 설계하고 개발했습니다.",
          keynotes: [
            "Sequelize ORM을 활용해 PostgreSQL에 입력될 데이터의 모델 작성",
            "Logging, Error Handling을 위한 Middleware 작성",
            "받아 온 데이터를 가공/통합한 뒤 저장하기 위한 라이브러리 작성",
            "API Endpoint별로 연동 작업을 수행하기 위한 컨트롤러 작성",
            "Swagger를 활용한 API Endpoint 문서화",
            "Typedoc을 활용한 라이브러리 문서화",
            "Gulp로 Pug/SCSS/Typescript 컴파일 자동화"
          ],
          startedAt: "2019. 07.",
          endedAt: "2019. 10.",
          skills: [
            {
              keyword: "Typescript",
              description: "데이터 타입 명시로 컴파일 시점에 에러를 발견하여 코드 안전성을 높이기 위해 사용하였습니다.",
            },
            {
              keyword: "Node.js",
              description: "자바스크립트 생태계가 익숙하고, 풍부한 오픈 소스 라이브러리를 보유하고 있어 사용하였습니다.",
            },
            {
              keyword: "Express.js",
              description: "REST API를 제작하기 위해 도입한 프레임워크로 가볍고 유연한 구성이 가능하여 사용하였습니다.",
            },
            {
              keyword: "Sequelize",
              description: "DB 객체 조작을 Typescript 언어로 가능하게 하고, SQL Injection을 방지할 수 있어 사용하였습니다.",
            },
            {
              keyword: "Swagger",
              description: "API Endpoint를 주석으로 손쉽게 문서화할 수 있어서 사용하였습니다.",
            },
            {
              keyword: "Typedoc",
              description: "직접 작성한 라이브러리를 주석을 사용하여 문서화하기 위해 사용하였습니다.",
            },
            {
              keyword: "Gulp",
              description: "Pug, SCSS, Typescript 컴파일 작업을 자동화하기 위해 사용하였습니다.",
            },
          ],
        },
      ],
    },
  ],
};

export default jobs;
