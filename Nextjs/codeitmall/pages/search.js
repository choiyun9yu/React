import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

export default function Search() {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { q } = router.query;

    async function getProducts(query) {
        const res = await axios.get(`/products/?q=${query}`);
        const nextProducts = res.data.results;
        setProducts(nextProducts);
    }

    useEffect(() => {
        getProducts(q);
    }, [q]);

    return (
        <div>
            <h1>Search Page</h1>
            <SearchForm />
            <h2>{q} 검색결과 </h2>
            <ProductList products={products} />
        </div>
    );
}
