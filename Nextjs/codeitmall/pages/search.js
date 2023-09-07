import SearchForm from '@/components/SearchForm';
import { useRouter } from 'next/router';

export default function Search() {
    const router = useRouter();
    const { q } = router.query;

    return (
        <div>
            <h1>Search Page</h1>
            <SearchForm />
            <h2>{q} 검색결과 </h2>
        </div>
    );
}
