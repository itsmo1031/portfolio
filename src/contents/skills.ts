import { Payload } from "@/interfaces/Skill";

const skills: Payload = {
  list: [
    {
      name: "Web",
      keynotes: [
        "시선을 사로잡는 유저 인터페이스 및 애니메이션 구현을 좋아합니다.",
        "Search Engine Optimization 경험이 있습니다.",
        "다양한 OS, 브라우저 및 디바이스를 지원할 수 있습니다.",
        "LightHouse 점수를 높이기 위해 최선을 다합니다.",
        "웹 표준을 지키려 노력하고, Semantic Markup를 우선적으로 사용하기 위해 노력합니다.",
      ]
    },
    {
      name: "Javascript (Typescript)",
      keynotes: [
        "Javascript와 Typescript 문법에 익숙합니다. Typescript 사용을 선호합니다.",
        "CommonJS, ES Modules의 모듈 시스템에 대해 이해하고 상황에 맞게 적절히 사용할 수 있습니다.",
        "Node.js 생태계의 툴링에 익숙합니다.",
        "pnpm 사용을 선호합니다.",
      ]
    },
    {
      name: "React",
      keynotes: [
        "React hooks를 이해하고 있고, 필요한 hook을 작성해서 사용할 수 있습니다. Hook을 이용해 공통 비즈니스 로직을 분리할 수 있습니다.",
        "Next.js, Remix.js와 같은 리액트 프레임워크에 익숙하고, Server Side Rendering에 대해 이해하고 있으며 적용할 수 있습니다.",
        "Zustand를 사용한 클라이언트 상태 관리와 Tanstack Query를 사용한 서버 상태 관리를 할 수 있습니다.",
        "Framer-motion을 사용해 인터랙티브한 유저 인터페이스를 구현하는 것을 좋아합니다.",
        "Storybook을 사용한 컴포넌트 주도 개발을 실천할 수 있습니다.",
        "Vitest와 같은 Testing Library를 사용하여 테스트코드를 작성할 수 있습니다.",
      ]
    },
    {
      name: "Vue",
      keynotes: [
        "Vue3를 사용할 수 있고, Composition API 사용을 선호합니다.",
        "MVVM 패턴에 대해 이해하고 있습니다.",
      ]
    },
    {
      name: "Java",
      keynotes: [
        "객체지향 프로그래밍에 대해 이해하고 있고, 객체지향의 설계 5원칙인 SOLID를 준수하려 노력합니다.",
        "JVM의 동작 원리에 대해서 파악하고 있습니다.",
        "제네릭을 사용하여 타입을 일반화하여 공통 로직을 보다 효율적으로 작성하기 위해 노력합니다."
      ]
    },
    {
      name: "Spring",
      keynotes: [
        "Spring의 핵심인 POJO에 대해 이해하고 있으며, IoC와 DI, AOP 및 PSA에 대해 이해하고 있고 설명할 수 있습니다.",
        "MVC 패턴에 대해 이해하고 있고, Spring MVC의 다양한 기능을 적재적소에 활용할 수 있습니다.",
        "JPA, MyBatis 등의 ORM을 사용하여 데이터를 안전하게 제어할 수 있습니다.",
        "Spring Boot를 사용하여 RESTful API를 구현할 수 있습니다.",
        "Spring Data JPA를 사용하여 데이터베이스와 연동할 수 있습니다.",
        "Spring Security를 사용하여 인증 및 권한 관리를 할 수 있습니다.",
      ]
    },
    {
      name: "DevOps",
      keynotes: [
        "AWS EC2, S3, CloudFront등을 이용해 어플리케이션 레이어를 구성할 수 있습니다.",
        "Jenkins, GitHub Actions등의 도구로 CI/CD 파이프라인을 구축할 수 있습니다.",
        "도메인을 등록하여 원하는 경로로 페이지를 연결해 사용할 수 있습니다.",
        "Docker 컨테이너 환경을 이해하고 있으며 적재적소에 활용할 수 있습니다. Docker Compose 문서를 작성해 활용하는 것을 선호합니다.",
        "라즈베리파이를 활용해 리눅스 환경의 홈 서버를 운영하고 있습니다."
      ]
    },
    {
      name: "ETC",
      keynotes: [
        "Git을 활용하여 프로젝트 관리를 하며, git-flow 혹은 github-flow를 지키도록 노력합니다.",
        "Linux 환경에서 개발하는 것을 선호하고 CLI 사용에 능숙합니다. MacOS 혹은 WSL2 환경에서 주로 개발합니다.",
        "Notion, Jira, Confluence등 다양한 협업 툴 사용에 익숙합니다.",
        "Figma를 사용하여 디자이너와 협업하며, 디자인 시스템을 구축하는 것을 좋아합니다.",
      ]
    }
  ]
}

export default skills;
