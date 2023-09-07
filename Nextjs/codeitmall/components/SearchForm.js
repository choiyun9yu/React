import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchForm() {
    const router = useRouter();
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        // handleSubmit 함수에서는 preventDefault로 기본동작을 막고
        e.preventDefault();
        // router객체의 .push함수 사용
        if (!value) {
            // 검색어가 없을 때 Home으로 이동
            router.push('/');
            return;
        }
        router.push(`/search?q=${value}`);
    }

    return (
        // form 태그에서 검색 버튼을 누르면 onSumit 이벤트 발생 -> handleSumit 함수 실행
        <form onSubmit={handleSubmit}>
            <input name="q" value={value} onChange={handleChange} />
            <button>검색</button>
        </form>
    );
}
