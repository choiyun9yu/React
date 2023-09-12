import Image from 'next/image';

export default function Test() {
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: '50%',
                    height: '200px',
                }}
            >
                <Image
                    fill
                    src="/images/product.png"
                    alt="상품 이미지"
                    style={{
                        objectFit: 'cover', //
                    }}
                />
            </div>
        </>
    );
}

// import Image from 'next/image';

// export default function Test() {
//     return (
//         <>
//             {/* html 태그 */}
//             <img src="/images/product.png" width="400" height="400" alt="상품 이미지" />
//             {/* image 컴포넌트, 주소를 바꿔주고 이미지 원본을 최적화해서 가져옴, 레이지 로딩 지원 */}
//             <Image src="/images/product.png" width={120} height={120} alt="상품 이미지" />
//         </>
//     );
// }
