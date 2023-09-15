import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';

// 서버 사이드 렌더링
export async function getServerSideProps(context) {
    const q = context.quey['q'];

    const res = await axios.get(`/products/?q=${q}`);
    const products = res.data.results ?? [];

    return {
        props: {
            products,
        },
    };
}

export default function Search({ q, products }) {
    return (
        <div>
            <h1>Search Page</h1>
            <SearchForm />
            <h2>{q} 검색결과 </h2>
            <ProductList products={products} />
        </div>
    );
}
