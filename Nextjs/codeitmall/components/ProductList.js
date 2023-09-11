import Link from 'next/link';
import styles from '@/styles/ProductList.module.css';

// products 인자의 기본값은 빈배열, 빈배열인 경우 아무것도 매핑하지 않음
export default function ProductList({ products = [] }) {
    return (
        <ul className={styles.productList}>
            {products.map((product) => (
                <li key={product.id}>
                    {/* Link 가 있어서 클릭하면 각 상품의 주소로 이동 */}
                    <Link className={styles.product} href={`/items/${product.id}`}>
                        <img src={product.imgUrl} width="300" height="300" alt={product.name} />
                        <span className={styles.productName}>{product.name}</span>
                        <br />
                        {product.price}원
                    </Link>
                </li>
            ))}
        </ul>
    );
}
