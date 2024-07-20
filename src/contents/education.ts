import { Payload } from "@/interfaces/Education";

const education: Payload = {
  list: [
    {
      name: "삼성 청년 SW 아카데미 10기",
      startedAt: "2023. 07.",
      endedAt: "2024. 06.",
      title: "Java 전공반 (우수 수료생)",
      description: "Javascript, Java 등의 웹 개발 주요 언어들과 Vue, Spring 등의 프레임워크를 학습하고 기획부터 배포까지 도맡아 하는 실무 기반의 프로젝트를 수행하였습니다."
    },
    {
      name: "한국공학대학교",
      startedAt: "2014. 03.",
      endedAt: "2018. 02.",
      title: "컴퓨터공학심화 공학사 (최우등 졸업)",
      description: "컴퓨터공학과에서 4년간 공부하며 객체지향언어, 컴퓨터구조, 논리회로, 알고리즘, 컴퓨터 네트워크, 웹 프로그래밍 등의 과목을 우수한 성적으로 이수하였습니다. 공학교육인증(ABEEK)을 이수하여 공학사 학위를 받았습니다."
    }
  ]
}

export default education;
