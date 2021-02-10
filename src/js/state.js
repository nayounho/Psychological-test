const test = [
  {
    id: 1,
    q: '하루 중 제일 기분이 좋을 때는?',
    a: [
      { num: 'a', answer: '아침', score: 2 },
      { num: 'b', answer: '오후나 이른 저녁', score: 4 },
      { num: 'c', answer: '늦은 밤', score: 6 }
    ]
  },
  {
    id: 2,
    q: '나는 걸을 때, 보통',
    a: [
      { num: 'a', answer: '보폭을 넓게, 빨리 걷는다.', score: 6 },
      { num: 'b', answer: '보폭을 좁게, 빨리 걷는다.', score: 4 },
      {
        num: 'c',
        answer: '머리를 들고, 세상을 정면으로 바라보며 덜 빠르게 걷는다.',
        score: 7
      },
      { num: 'd', answer: '바닥을 보며 덜 빠르게 걷는다.', score: 2 },
      { num: 'e', answer: '아주 느리게 걷는다.', score: 1 }
    ]
  },
  {
    id: 3,
    q: '사람들과 얘기할 때 나는',
    a: [
      { num: 'a', answer: '내 팔짱을 끼고 서서', score: 4 },
      { num: 'b', answer: '두! 손을 마주잡고', score: 2 },
      { num: 'c', answer: '한 손이나 양 손을 힙에 얹고', score: 5 },
      {
        num: 'd',
        answer: '얘기 나누는 상대방을 건드리거나 살짝 밀면서',
        score: 7
      },
      {
        num: 'e',
        answer: '내 귀나 턱을 만지작거리거나 손가락으로 머리를 빗으면서',
        score: 6
      }
    ]
  },
  {
    id: 4,
    q: '편안히 쉴 때, 나는',
    a: [
      { num: 'a', answer: '다리를 굽힌 채로 나란히 두고 앉는다.', score: 4 },
      { num: 'b', answer: '다리를 꼬고 앉는다.', score: 6 },
      { num: 'c', answer: '다리를 쭉 펴고 앉는다.', score: 2 },
      { num: 'd', answer: '한 쪽 다리를 접어 깔고 앉는다.', score: 1 }
    ]
  },
  {
    id: 5,
    q: '뭔가 아주 재미있는 일이 생겼을 때, 나는',
    a: [
      {
        num: 'a',
        answer: '아주 큰 소리로 즐거움을 숨기지 않고 웃는다.',
        score: 6
      },
      { num: 'b', answer: '웃지만 그다지 크지 않은 소리로 웃는다.', score: 4 },
      { num: 'c', answer: '조용히 소리를 별로 내지 않으며 웃는다.', score: 3 },
      { num: 'd', answer: '오히려 쑥스러운 듯한 미소.', score: 5 }
    ]
  },
  {
    id: 6,
    q: '파티나 사람들이 많이 모이는 장소에 나는',
    a: [
      {
        num: 'a',
        answer: '사람들이 내 존재를 의식하도록 화려한 등장을 한다.',
        score: 6
      },
      {
        num: 'b',
        answer: '아는 사람들을 찾을 수 있을까 해서 둘러보며 차분히 들어선다.',
        score: 4
      },
      {
        num: 'c',
        answer: '시선을 끌지 않기 위해 할 수 있는 한 최대로 조용히 입장한다.',
        score: 2
      }
    ]
  },
  {
    id: 7,
    q: '완전히 일에 몰두한 채로 열심히 하다가 방해 받았을 때 나는',
    a: [
      { num: 'a', answer: '휴식의 기회를 반갑게 맞이한다.', score: 6 },
      { num: 'b', answer: '짜증이 활활 난다', score: 2 },
      { num: 'c', answer: '그 중간 어딘가 쯤', score: 4 }
    ]
  },
  {
    id: 8,
    q: '다음 중 제일 좋아하는 색은?',
    a: [
      { num: 'a', answer: '빨강이나 오렌지', score: 6 },
      { num: 'b', answer: '까만색', score: 7 },
      { num: 'c', answer: '노랑이나 연한 파랑', score: 5 },
      { num: 'd', answer: '녹색', score: 4 },
      { num: 'e', answer: '짙은 파랑이나 보라', score: 3 },
      { num: 'f', answer: '하양', score: 2 },
      { num: 'g', answer: '갈색이나 회색', score: 1 }
    ]
  },
  {
    id: 9,
    q: '잠자리에 들어서 잠들기 바로 직전에 나는',
    a: [
      { num: 'g', answer: '몸을 똑바로 펴고 누운 포즈이다.', score: 7 },
      { num: 'g', answer: '엎드린 채로 몸을 죽 편 포즈이다.', score: 6 },
      {
        num: 'g',
        answer: '약간 몸을 둥글린 채로 옆으로 누운 포즈이다.',
        score: 4
      },
      { num: 'g', answer: '한 팔을 베고 있다.', score: 2 },
      { num: 'g', answer: '머리를 이불 밑에 넣고 있다.', score: 1 }
    ]
  },
  {
    id: 10,
    q: '나는 이런 꿈을 자주 꾼다.',
    a: [
      { num: 'a', answer: '낙하하는 꿈', score: 4 },
      { num: 'b', answer: '싸우거나 애 쓰는 꿈', score: 2 },
      { num: 'c', answer: '무엇이나 누군가를 찾는 꿈', score: 3 },
      { num: 'd', answer: '날아오르거나 떠오르는 꿈', score: 5 },
      { num: 'e', answer: '꿈은 잘 꾸지 않는다.', score: 6 },
      { num: 'f', answer: '항상 좋은 느낌의 꿈이다.', score: 1 }
    ]
  }
];
