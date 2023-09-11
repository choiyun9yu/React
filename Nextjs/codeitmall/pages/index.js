import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import SearchForm from '@/components/SearchForm';
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import ProductList from '@/components/ProductList';

export default function Home() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const res = await axios.get('/products');
        const nextProducts = res.data.results;
        setProducts(nextProducts);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <h1>Codeitmall</h1>
            <SearchForm />
            <ProductList products={products} />
            {/* <ul>
                <li>
                    <Link href="/products/1">첫 번째 상품</Link>
                </li>
                <li>
                    <Link href="/products/2">두 번째 상품</Link>
                </li>
                <li>
                    <Link href="/products/3">세 번째 상품</Link>
                </li>
            </ul> */}
        </>
    );
}
