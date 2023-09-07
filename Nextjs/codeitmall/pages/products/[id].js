import { useRouter } from 'next/router';

export default function Product() {
    // useRouter를 사용해서 router 객체를 만들고
    const router = useRouter();
    // .qurey을 사용해서 id 값으로 받아온다.
    const { id } = router.query;

    return <div>Product {id} page</div>;
}
