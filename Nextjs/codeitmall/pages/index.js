import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import SearchForm from '@/components/SearchForm';
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import ProductList from '@/components/ProductList';

// 정적 생성을할 때 Next.js가 실행할 함수 구현
export async function getStaticProps() {
    // 데이터 가져오는 코드
    const res = await axios.get('/products');
    const products = res.data.results;

    return {
        props: {
            products,
        },
    };
}

export default function Home({ products }) {
    return (
        <>
            <h1>Codeitmall</h1>
            <SearchForm />
            <ProductList className={styles.productList} products={products} />
        </>
    );
}
