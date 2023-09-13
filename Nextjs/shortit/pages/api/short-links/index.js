export default function handler(req, res) {
    switch (req.method) {
        // POST로 요청이 들어오면 새로운 짧은 주소를 생성한 것 처림 201 상태코드로 생성된 데이터 전송
        case 'POST':
            res.status(201).send({
                title: '위키피디아 Next.js',
                url: 'https:/en.wikipedia.org/wiki/Next.js',
            });
            break;

        // GET으로 요청이 들어오면 짧은 주소 목록을 보여주고
        case 'GET':
            res.send([
                {
                    id: 'abc',
                    title: '위키피디아 Next.js',
                    url: 'https:/en.wikipedia.org/wiki/Next.js',
                },
                {
                    id: 'def',
                    title: '코드잇 자유게시판',
                    url: 'https://codeit.kr/community/general',
                },
                {
                    id: 'ghi',
                    title: '코드잇 질문답변',
                    url: 'https:/www.codeit.kr/community/questions',
                },
            ]);
            break;

        // 나머지 요청에 대해서는 404 상태코드 전송
        default:
            res.status(404).send(); // 메소드 체이닝: 리턴 값에 .으로 계속 메소드 실행
    }
}
