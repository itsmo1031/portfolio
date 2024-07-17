import { Item, Payload } from "@/interfaces/Project";

const oomool: Item = {
  name: "우물 - 우리들의 물음표",
  links: {
    git: "https://github.com/oomool-app",
  },
  startedAt: "2023. 12.",
  endedAt: "2024. 02.",
  position: "팀장",
  description: "친구, 가족, 지인 등 주변 사람들과 함께할 수 있는 폐쇄형 SNS 서비스로, 정해진 기간 동안 그룹 내 특정 1인의 마니또가 되어 랜덤으로 제공되는 질문에 익명으로 답변을 남겨 상대방에 대한 속마음을 전할 수 있는 PWA 형태의 웹 어플리케이션입니다.",
  keynotes: [
    "Portainer를 이용한 EC2내 도커 서버 환경 구성 및  Nginx Proxy Manager를 활용한 Reverse Proxy 구성",
    "CI/CD 파이프라인 구축을 위한 Jenkins 셋업 및 백엔드/프론트엔드 배포 파이프라인 스크립트 작성",
    "Figma를 활용한 디자인 시스템 구축 및 페이지 디자인 총괄",
    "Push Notification에 필요한 Spring REST API 작성",
    "PWA 대응을 위한 manifest 작성",
    "Firebase Cloud Messaging을 활용한 Push Notification 구현",
    "Push Notification 수신을 위한 service worker 작성",
    "Husky를 활용한 coding/commit convention 설정"
  ],
  skills: [
    {
      keyword: "Typescript",
      description: "데이터 타입 명시로 컴파일 시점에 에러를 발견하여 코드 안전성을 높이기 위해 사용하였습니다."
    },
    {
      keyword: "Nuxt.js",
      description: "Vue 환경에 익숙한 팀원들이 다수였고, 웹 프레임워크가 가져다 주는 이점에 대해 학습하고자 사용하였습니다."
    },
    {
      keyword: "Spring",
      description: "REST API를 구축하기 편리하고 Spring Data, Security 등 웹 개발에서 필수적인 기능을 구현하기 쉽게 만들어주는 프레임워크를 제공하고 있어 사용하였습니다."
    },
    {
      keyword: "MariaDB",
      description: "관계성이 필요한 데이터들을 쉽게 관리할 수 있어 선택하였습니다."
    },
    {
      keyword: "Redis",
      description: "영속성이 필요하지 않은 임시 데이터(대기방)를 관리하고 캐시를 사용하여 데이터를 보다 빠르게 제공하기 위해 선택하였습니다."
    },
    {
      keyword: "Progressive Web App",
      description: "웹 페이지를 이용하면서도 모바일 앱을 이용할 때와 동일한 사용자 경험을 제공하기 위해 선택하였습니다."
    },
    {
      keyword: "Firebase Cloud Messaging",
      description: "PWA 앱을 설치한 기기에 푸시 알림을 손쉽게 제공할 수 있어 선택하였습니다."
    }
  ],
  images: [
    {
      src: "/projects/oomool/architecture.png",
      alt: "우물 아키텍처"
    },
    {
      src: "/projects/oomool/login.gif",
      alt: "로그인 화면"
    },
    {
      src: "/projects/oomool/main.gif",
      alt: "메인 화면 구성",
    },
    {
      src: "/projects/oomool/make-room.gif",
      alt: "방 생성 과정",
    },
    {
      src: "/projects/oomool/room.gif",
      alt: "게임 진행중인 방 화면"
    },
    {
      src: "/projects/oomool/notification.gif",
      alt: "알림 화면"
    },
    {
      src: "/projects/oomool/correct.gif",
      alt: "정답을 맞췄을 때 나오는 화면"
    },
    {
      src: "/projects/oomool/failed.gif",
      alt: "정답을 맞추지 못했을 때 나오는 화면"
    }
  ]
}

const projects: Payload = {
  disabled: false,
  list: [
    oomool
  ],
};

export default projects;
