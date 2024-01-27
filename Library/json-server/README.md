# json-server

#### 프로젝트 시작하기

    # 프로젝트 생성
    % npx create-react-app json-server-test

    # json-server 설치
    % sudo npm install -g json-server

    # json-server 실행
    % json-server --watch ./json-server-test/data/ai_drone.json --port 3001

#### JSON 파일

프로젝트 루트에(src 폴더 밖) json 파일을 만든다. 파일 형식은 아래와 같아야 한다.

        {
            "countries": [ {"id": 1, "name": "Narnia"}, {"id":2, "Sacoridia"}, ...]
        }

서버는 여러 "테이블"을 시뮬레이션할 수 있으므로 다음과 같은 다른 줄을 추가할 수 있다.

         "cities": [ {"id":1, "country_id": 1, "name":"Cair Paravel", "capital":1},...]
