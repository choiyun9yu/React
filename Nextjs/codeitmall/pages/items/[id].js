import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import SizeReviewList from '@/components/SizeReviewList';

export default function Product() {
    const [product, setProduct] = useState();
    const [sizeReviews, setSizeReviews] = useState([]);
    // useRouter를 사용해서 router 객체를 만들고
    const router = useRouter();
    // .qurey을 사용해서 id 값으로 받아온다.
    const { id } = router.query;

    // api에서 Product 데이터를 받아오는 비동기 함수
    async function getProduct(targetId) {
        const res = await axios.get(`/products/${targetId}`);
        const nextProduct = res.data;
        setProduct(nextProduct);
    }

    async function getSizeReviews(targetId) {
        const res = await axios.get(`/size_reviews/?product_id/${targetId}`);
        const nextSizeReivews = res.data.results ?? []; // 값이 없을 수 있어서 빈배열처리
        setSizeReviews(nextSizeReivews);
    }

    // 렌더링이 끝난 후 그리고 id값이 바뀔 때 비동기적으로 실행
    useEffect(() => {
        if (!id) return;

        // 렌더링이 끝난 후 실행
        getProduct(id);
        getSizeReviews(id);
    }, [id]); // id 값이 바뀔때마다 실행

    // 맨처음 product 값이 없을 때, 아무것도 렌더링하지 않음
    if (!product) return null;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imgUrl} alt={product.name} />
            <SizeReviewList sizeReviews={sizeReviews} />
        </div>
    );
}
