import { Item, Payload } from "@/interfaces/Project";

const habitz: Item = {
  name: "habitz",
  links: {
    git: "https://github.com/habitz-app",
  },
  startedAt: "2024. 04.",
  endedAt: "2024. 06.",
  position: "프론트엔드 리더 & 인프라",
  description: "미션과 보상을 통해 자녀의 올바른 습관 형성을 만들어주기 위해 제작한 서비스입니다. 부모는 아이에게 좋은 습관을 형성하는 데 기여하고, 포인트(용돈)를 부여하여 체계적으로 자녀의 활동을 관리할 수 있으며, 스마트폰이 익숙한 ZALPHA 세대 자녀는 부여된 미션을 하나씩 수행해나가며 포인트를 모아 직접 사용하는 등의 행위를 통해 기초 경제 관념을 배워나갑니다.",
  keynotes: [
    "Portainer를 이용한 EC2내 도커 서버 환경 구성",
    "Nginx Proxy Manager를 활용한 Reverse Proxy 구성",
    "CI/CD 파이프라인 구축을 위한 Jenkins 셋업",
    "백엔드/프론트엔드 배포 파이프라인 스크립트 작성",
    "Gerrit을 활용한 코드 리뷰 시스템 구축",
    "Zustand를 활용한 클라이언트 상태 관리",
    "TanStack Query를 활용한 서버 상태 관리",
    "Figma를 활용한 디자인 시스템 구축 및 페이지 디자인 총괄",
    "Storybook 도입을 통한 컴포넌트 주도 개발",
    "PandaCSS를 활용한 디자인 시스템 구축",
    "React Hook Form과 zod를 활용한 form validation 처리",
    "Husky를 활용한 coding/commit convention 설정"
  ],
  skills: [
    {
      keyword: "Typescript",
      description: "데이터 타입 명시로 컴파일 시점에 에러를 발견하여 코드 안전성을 높이기 위해 사용하였습니다."
    },
    {
      keyword: "Next.js 14",
      description: "Next.js가 제공하는 Routing, Font Optimization, Image Optimization을 이용하고, 방대한 React 라이브러리를 사용할 수 있다는 이점이 있어 사용하였습니다."
    },
    {
      keyword: "Storybook",
      description: "컴포넌트를 시각화/문서화하고, 컴포넌트 단위로 개발하여 재사용이 용이한 컴포넌트를 제작하고자 사용하였습니다."
    },
    {
      keyword: "Zustand",
      description: "로그인 데이터와 같은 사용자 상태 정보를 클라이언트에서 관리하기 위해 사용하였습니다."
    },
    {
      keyword: "Tanstack Query",
      description: "서버 데이터들을 클라이언트 데이터와 분리하여 관리하기 위해 사용하였습니다."
    },
    {
      keyword: "PandaCSS",
      description: "Type-safe한 스타일링이 가능하고, 런타임 오버헤드가 없어 퍼포먼스가 뛰어나 채택하였습니다."
    },
    {
      keyword: "React Hook Form",
      description: "회원가입, 결제 등 form 검증이 필요한 컴포넌트에 사용하여 잘못된 데이터가 전송되지 않도록 하기 위해 사용하였습니다."
    },
  ],
  images: [
    {
      src: "/projects/habitz/cover.png",
      alt: "커버 이미지"
    },
    {
      src: "/projects/habitz/architecture.png",
      alt: "habitz 아키텍처"
    },
    {
      src: "/projects/habitz/main.png",
      alt: "메인 화면"
    },
    {
      src: "/projects/habitz/schedule.png",
      alt: "아이 미션 스케쥴 화면",
    },
    {
      src: "/projects/habitz/quiz.png",
      alt: "아이가 퀴즈나 상식 등 다양한 정보를 학습할 수 있는 화면",
    },
    {
      src: "/projects/habitz/store.png",
      alt: "아이가 구매할 수 있는 상품이 나열되어 있는 화면",
    }
  ]
}

const lyricit: Item = {
  name: "LYRIC:IT",
  links: {
    git: "https://github.com/lyricit",
  },
  startedAt: "2024. 02.",
  endedAt: "2024. 04.",
  position: "프론트엔드 리더",
  description: "주어진 키워드가 들어간 가사를 입력해 점수를 얻는 실시간 대전 웹 게임입니다. JTBC 예능 <아는 형님>의 코너 중 하나였던 <전국노래자랑>에 영감을 받아 제작하였습니다. WebSocket과 STOMP 프로토콜로 실시간으로 데이터를 송수신 하였습니다.",
  keynotes: [
    "Figma를 활용한 디자인 시스템 구축 및 페이지 디자인 총괄",
    "Inkscape를 이용한 게임 아바타 제작",
    "SVG 포맷을 활용한 아바타 파츠 제작",
    "Storybook을 이용한 컴포넌트 주도 개발",
    "StompJS를 활용한 WebSocket 통신",
    "React Context API를 활용한 Stomp 및 게임 데이터 관리",
    "Zustand를 활용한 클라이언트 상태 관리",
    "TanStack Query를 활용한 서버 상태 관리",
    "TailwindCSS/CVA/tailwind-merge/clsx를 이용한 컴포넌트 디자인",
    "Framer Motion을 이용한 인터랙티브 컴포넌트 작성",
    "React Hook Form과 zod를 활용한 form validation 처리",
    "Husky를 활용한 coding/commit convention 설정"
  ],
  skills: [
    {
      keyword: "Typescript",
      description: "데이터 타입 명시로 컴파일 시점에 에러를 발견하여 코드 안전성을 높이기 위해 사용하였습니다."
    },
    {
      keyword: "Next.js 14",
      description: "Next.js가 제공하는 Routing, Font Optimization, Image Optimization을 이용하고, 방대한 React 라이브러리를 사용할 수 있다는 이점이 있어 사용하였습니다."
    },
    {
      keyword: "Storybook",
      description: "컴포넌트를 시각화/문서화하고, 컴포넌트 단위로 개발하여 재사용이 용이한 컴포넌트를 제작하고자 사용하였습니다."
    },
    {
      keyword: "Zustand",
      description: "닉네임, 아바타와 같은 사용자 상태 정보를 클라이언트에서 관리하기 위해 사용하였습니다."
    },
    {
      keyword: "Tanstack Query",
      description: "REST API로 호출한 초기 데이터 및 STOMP 프로토콜로 추가되는 서버 데이터들을 클라이언트 데이터와 분리하여 관리하기 위해 사용하였습니다."
    },
    {
      keyword: "TailwindCSS",
      description: "className만으로 손쉽게 CSS를 제어할 수 있어 사용하였습니다. 동적으로 className을 할당하고 중복을 최소화하기 위해 clsx와 tailwind-merge를 활용하였고, class-variance-authority를 활용해 컴포넌트에 variant를 주어 한 컴포넌트에 대해 다양한 variant를 제공하여 재사용성을 높였습니다."
    },
    {
      keyword: "Framer Motion",
      description: "인터랙티브한 UI를 제공하여 실시간 게임의 특징을 살림으로써 사용자 경험을 더욱 가치있게 만들고자 사용하였습니다."
    },
    {
      keyword: "React Hook Form",
      description: "회원 로그인, 방 생성 등 form 검증이 필요한 컴포넌트에 사용하여 잘못된 데이터가 전송되지 않도록 하기 위해 사용하였습니다."
    },
  ],
  images: [
    {
      src: "/projects/lyricit/lyricit-landing-page.avif",
      alt: "랜딩 페이지"
    },
    {
      src: "/projects/lyricit/lyricit-lobby.png",
      alt: "로비 화면"
    },
    {
      src: "/projects/lyricit/lyricit-waiting.avif",
      alt: "대기방 화면"
    },
    {
      src: "/projects/lyricit/lyricit-correct.avif",
      alt: "게임 중 정답을 맞췄을 때 화면",
    },
    {
      src: "/projects/lyricit/lyricit-wrong.avif",
      alt: "게임 중 정답을 맞추지 못했을 때 화면",
    }
  ]
}

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
    "Portainer를 이용한 EC2내 도커 서버 환경 구성",
    "Nginx Proxy Manager를 활용한 Reverse Proxy 구성",
    "CI/CD 파이프라인 구축을 위한 Jenkins 셋업",
    "백엔드/프론트엔드 배포 파이프라인 스크립트 작성",
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
      src: "/projects/oomool/cover.png",
      alt: "커버 이미지"
    },
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

const speechGame: Item = {
  name: "말 헤는 밤",
  links: {
    site: "https://itsmo1031.github.io/Speech-To-Game/",
    git: "https://github.com/itsmo1031/Speech-To-Game",
  },
  startedAt: "2023. 05.",
  endedAt: "2023. 05.",
  position: "개인 프로젝트",
  description: "Web Speech API를 활용해 제작한 음성인식 산성비 게임입니다. HTML과 CSS, Vanilla Javascript만 활용하여 프로젝트를 수행해보고자 제작했습니다. SPA를 적용하여 한 페이지에서 모든 게임이 진행됩니다.",
  keynotes: [
    "Web Speech API의 SpeechRecognition 인터페이스를 활용해 음성 데이터를 텍스트로 변환",
    "변환한 텍스트를 단어 단위로 분리하고, 분리한 데이터를 임의 시간 간격으로 화면에 렌더링",
    "화면에 출력된 단어가 화면 아래로 떨어지는 기능",
    "화면에 출력된 단어가 화면 바닥까지 내려갔을 때 게임이 종료되는 기능",
    "사용자가 화면의 단어를 정확히 입력했을 때 점수가 주어지며 화면에서 사라지는 기능",
    "페이지 디자인 및 화면 전환 기능",
  ],
  skills: [
    {
      keyword: "Javascript",
      description: "Web Speech API를 활용하여 음성 인식 기능을 사용하고, 웹 페이지를 동적으로 제어해 게임 화면을 그리기 위해 사용하였습니다. ES6 문법을 이용하였고, Strict 모드를 사용하여 에러를 예측 가능하게 함으로써 코드의 안전성을 높이고자 하였습니다."
    }
  ],
  images: [
    {
      src: "/projects/speech-game/main.png",
      alt: "커버 이미지"
    },
    {
      src: "/projects/speech-game/game.png",
      alt: "우물 아키텍처"
    },
    {
      src: "/projects/speech-game/game-over.png",
      alt: "로그인 화면"
    }
  ],
  articles: [
    {
      title: "Web Speech API를 활용한 음성인식 게임 개발 회고",
      href: "https://itsmo.dev/speech-game-memoir/"
    }
  ]
}

const projects: Payload = {
  disabled: false,
  list: [
    habitz,
    lyricit,
    oomool,
    speechGame
  ],
};

export default projects;
