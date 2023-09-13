# ASP.NET SignalR

## SignalR 이란?

Microsoft에서 개발한 실시간 웹 응용 프로그램을 구축하기 위한 라이브러리  
(실시간 웹 기능은 서버측 코드가 클라이언트에 즉시 컨텐츠를 밀어주는 것을 의미)

#### SignalR 장점

-   **양방향 통신**: SignalR은 웹 애플리케이션과 서버 간의 양방향 통신을 지원합니다. 이를 통해 실시간으로 데이터를 전송하고 서버에서 클라이언트로 메시지를 보낼 수 있습니다.

-   **다양한 플랫폼 지원**: SignalR은 .NET, JavaScript, Python, Java 등 다양한 프로그래밍 언어와 플랫폼에서 사용할 수 있습니다. 이로써 서로 다른 플랫폼 간에도 실시간 통신을 구현할 수 있습니다.

-   **프록시 생성**: SignalR은 자동으로 클라이언트 측 JavaScript 프록시 코드를 생성해줍니다. 이를 통해 클라이언트 애플리케이션에서 서버와 통신하기 위한 복잡한 코드를 작성할 필요가 없습니다.

-   **다양한 전송 프로토콜**: SignalR은 웹소켓(WebSockets)을 기본으로 사용하지만, 웹소켓을 지원하지 않는 환경에서는 Long Polling 등의 다양한 전송 프로토콜을 자동으로 선택하여 사용할 수 있습니다.

-   **확장성**: SignalR은 클러스터링 및 로드 밸런싱을 지원하여 대규모 애플리케이션에서도 안정적으로 동작할 수 있습니다.

-   **실시간 업데이트**: 실시간으로 데이터를 업데이트해야 하는 채팅 애플리케이션, 실시간 게임, 주식 시장 애플리케이션 등 다양한 온라인 실시간 애플리케이션을 구현할 때 유용합니다.

#### SignalR의 기본 아키텍처

-   **클라이언트**: 웹 브라우저, 모바일 앱 또는 기타 클라이언트 애플리케이션은 SignalR 클라이언트 라이브러리를 사용하여 서버와 통신합니다.

-   **서버**: .NET Core 또는 .NET Framework에서 실행되는 SignalR 서버는 클라이언트와 통신하고 실시간 이벤트를 처리합니다.

-   **전송 프로토콜**: SignalR은 여러 가지 전송 프로토콜을 사용하여 클라이언트와 서버 간의 통신을 처리합니다. 이 중 웹소켓(WebSockets)이 가장 효율적이며 실시간 통신에 적합한 프로토콜입니다.

#### SignalR이 권장되는 경우

-   서버로부터 빈번한 업데이트가 필요한 앱  
    (게이밍, 소셜 네트워크, 투표, 경매, 지도, GPS 등)
-   대시보드, 모니터링 앱

## 사용하기

### 1. HubConnectionBuilder

Signal 연결 설정을 돕는 도우미 클래스

-   연결 URL 설정
-   연결 메서드 설정
-   허브 메서드에 대한 클라이언트 콜백 설정
-   연결 옵션 설정
-   연결 빌드

######

예제 코드에서 HubConnectionBuilder를 사용하여 연결 URL을 설정하고 build() 메서드로 연결을 생성한 다음, start() 메서드를 호출하여 연결을 시작

#### 예제

    import { HubConnectionBuilder } from '@microsoft/signalr';


    // 연결 URL 설정
    const hubUrl = 'https://example.com/myHub';

    // HubConnectionBuilder를 사용하여 클라이언트 생성
    const connection = new HubConnectionBuilder()
    .withUrl(hubUrl) // 연결 URL 설정
    .build(); // 연결 빌드

    // 연결 시작
    connection.start()
    .then(() => {
        console.log('SignalR 연결 성공');
    })
    .catch(error => {
        console.error('SignalR 연결 실패: ', error);
    });
