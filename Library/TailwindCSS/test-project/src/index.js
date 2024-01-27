import ReactDOM from 'react-dom/client';
import App from './App';
// js 파일에 css 파일 삽입하기 -> html head 태그안에 자동 작성됨
import './index.css';

// JSX로 작성한 코드가 나타날 위치 설정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);