import { Payload } from "@/interfaces/Certificate";

const certificates: Payload = {
  list: [
    {
      name: "SQL 개발자 (SQLD)",
      validFrom: "2023. 10.",
      validThru: "2025. 10.",
      issuer: "한국데이터산업진흥원"
    },
    {
      name: "정보처리기사",
      validFrom: "2018. 05.",
      validThru: "2018. 05.",
      issuer: "한국산업인력공단"
    }
  ]
}

export default certificates;
