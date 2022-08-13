const quotes = [
  {
    quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다워지는 것이다.",
    author: "- 린홀",
  },
  {
    quote: "게으르지 않음은 영원한 삶의 집이요, 게으름은 죽음의 집이다.",
    author: "",
  },
  {
    quote: "나는 날마다, 모든 면에서, 점점 더 좋아지고 있다.",
    author: "",
  },
  {
    quote: "인생에 뜻을 세우는데 적당한 때는 없다.",
    author: "- 볼드윈",
  },
  {
    quote: "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
    author: "- 하버트 개서",
  },
  {
    quote: "세상에 공짜는 없다.",
    author: "",
  },
  {
    quote: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
    author: "- 찰리 채플린",
  },
  {
    quote: "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
    author: "- J. 하비스",
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
    author: "- 나딘 스테어",
  },
  {
    quote: "최고에 도달하려면 최저에서 시작해라.",
    author: "- P. 시루스",
  },
  {
    quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
    author: "- 칭기즈칸",
  },
  {
    quote: "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
    author: "- 기시미 이치로",
  },
  {
    quote: "일단 시작해라. 나중에 완벽해지면 된다.",
    author: "- 론 무어",
  },
  {
    quote: "아는 것이 힘이다.",
    author: "- 베이컨",
  },
  {
    quote: "참을 인 세 번이면 호구다.",
    author: "- 박명수",
  },
  {
    quote: "모든 이의 마음을 얻으려고 계산된 글은 그 누구의 마음도 얻지 못한다.",
    author: "- 아들라이 E. 스티븐슨",
  },
  {
    quote: "가장 큰 위험은 위험 없는 삶이다.",
    author: "- 스티븐 코비",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "- 벤자민 프랭클린",
  },
  {
    quote: "위험은 자신이 무엇을 하는지 모르는 데서 온다.",
    author: "- 워런 버핏",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;