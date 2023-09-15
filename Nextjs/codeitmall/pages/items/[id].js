import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import SizeReviewList from '@/components/SizeReviewList';
import Spinner from '@/components/Spinner';
import styles from '@/styles/Product.module.css';

// Next.js가 어떤 페이지를 미리 만들어야 하는지 알려주는 함수
// 다이나믹한 페이지를 정적 생성할 때 어떤 페이지를 정적 생성할지 알려주는 함수
export async function getStaticPaths() {
    const res = await axios.get('/products/');
    const products = res.data.results;
    const paths = products.map((product) => ({
        params: { id: String(product.id) },
    }));
    return {
        paths,
        fallback: true, // true로 설정하면 정적생해놓지 않은 페이지를 그때그때 생성해서 보여주는데 우선 로딩화면을 구현해줘야한다./ 데이터가 없는 경우 notFound: true를 리턴해서 404 페이지 보여주면 된다.
    };
}

// getStaticProps는 리액트 컴포넌트가 아니라서 Hook 사용 불가
export async function getStaticProps(context) {
    // useRouter로 id param을 가져올 수 없어서 context로 가져온다.
    const productId = context.params['id'];
    let product;
    try {
        const res = await axios.get(`/products/${productId}`);
        product = res.data;
    } catch {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
}

// 컴포넌트에서는 프롭스를 기반으로 실행
export default function Product({ product }) {
    const [sizeReviews, setSizeReviews] = useState([]);
    // useRouter를 사용해서 router 객체를 만들고
    const router = useRouter();
    // .qurey을 사용해서 id 값으로 받아온다.
    const { id } = router.query;

    async function getSizeReviews(targetId) {
        const res = await axios.get(`/size_reviews/?product_id/${targetId}`);
        const nextSizeReivews = res.data.results ?? []; // 값이 없을 수 있어서 빈배열처리
        setSizeReviews(nextSizeReivews);
    }

    // 렌더링이 끝난 후 그리고 id값이 바뀔 때 비동기적으로 실행
    useEffect(() => {
        if (!id) return;

        // 렌더링이 끝난 후 실행

        getSizeReviews(id);
    }, [id]); // id 값이 바뀔때마다 실행

    // 맨처음 product 값이 없을 때, 아무것도 렌더링하지 않음
    if (!product)
        return (
            <div className={styles.loading}>
                <Spinner />
            </div>
        );

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imgUrl} alt={product.name} />
            <SizeReviewList sizeReviews={sizeReviews} />
        </div>
    );
}
