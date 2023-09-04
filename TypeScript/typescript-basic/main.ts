{
    // 1. 변수 이름 뒤에 콜론을 써서 타입 지정 (타입은 코드 검사에만 쓰이고 실제 동작에는 활용 X)
    let size: number; // 타입 초기화
    let size2: number = 100; // 타입 초기화 및 할당

    // 기본 자료형
    let itemName: string = '코드잇 블랙 후드';
    let itemPrice: number = 129000;
    let membersOnly: boolean = true;
    let owner: undefined = undefined;
    let seller: null = null;

    let num = 2 / 0; // Inf <- 숫자형
    let num2 = 0 / 0; // NaN <- 숫자형
}

{
    // 2. 배열
    const cart: string[] = [];
    cart.push('c001');
    cart.push('c002');
    // cart.push(003); 타입 오류

    // 2차 문자 배열
    const carts: string[][] = [['c001', 'c002'], ['c003']];

    // 배열에는 사이즈 제한이 없어서 빈 배열을 해도 타입 오류가 나지 않음
    let mySize: number[] = [167, 28];
    mySize = [167, 28, 255];
    mySize = [255];
    mySize = [];

    // 배열이지만 개수를 명확히 정하고 싶으면 튜플 타입을 쓴다.
    // ! 배열 안에 모든 자료형이 같을 필요는 없다.
    let mySize2: [number, number] = [167, 28];
    // mySize = [167, 28, 255];     // 타입 오류
    // mySize = [255];              // 타입 오류
    // mySize = []                  // 타입 오류
}

{
    // 3. 객체타입
    let product: {
        id: string;
        name: string;
        price: number;
        membersOnly?: boolean; // ?로 옵셔널 프로퍼티 만듬
        sizes: string[];
    };

    // 객체의 프로퍼티 이름에 변수를 쓰고 싶으면 JS에서는 대괄호를 사용한다.
    let field = 'field name';
    let obj = {
        [field]: 'filed value',
    };

    // 타입스크립트 에서는 프로퍼티 개수를 알 수 없거나 갯수를 정하고 싶지 않은 경우에 프로퍼티의 타입만 지정 가능
    let stock: {
        [id: string]: number; // 프로퍼티 이름으로 아무 문자열이나 쓸 수 있고, id라는 건 아무렇게나 적어도 상관없는 이름, 프로퍼티의 밸류는 숫자형
    } = {
        c001: 3,
        c002: 0,
        c003: 1,
        // c004:: 'codeit', 타입 오류
    };
}

{
    // 4. any
    const product2 = {
        id: 'c001',
        name: '코드잇 블랙 후디',
        price: 129000,
        size: ['M', 'L', 'XL'],
    };
    // console.log(product2.revivews[2]); // 타입 오류

    const product3: any = {
        id: 'c001',
        name: '코드잇 블랙 후디',
        price: 129000,
        size: ['M', 'L', 'XL'],
    };
    console.log(product3.revivews[2]);

    // as 키워드로 프로퍼티의 타입 정의
    const parsedProduct = JSON.parse('{"name": "코드잇 토트백", "price":12000}') as {
        name: string;
        price: number;
    };

    // (:) 콜론으로 타입 명시해주기
    const parsedProduct2: {
        name: string;
        price: number;
    } = JSON.parse('{"name": "코드잇 토트백", "price":12000}');

    // 꺽쇠로 타입 정의하는 건 요즘 JS에서 꺽쇠를 많이 써서 사용하지 않음
    const parsedProduct3 = <
        {
            name: string;
            price: number;
        }
    >JSON.parse('{"name": "코드잇 토트백", "price": 12000}');
}

{
    // 5. 함수에 타입 정하기
    // 재고 객체
    const stock: { [id: string]: number } = {
        c001: 3,
        c002: 1,
    };
    // 장바구니 배열
    const cart: string[] = [];

    // 함수의 파라미터와 리턴 값의 타입 정의
    // tsconfig.json 파일에서 "strict":ture, 옵션이 켜져있으면 암묵적으로 any를 선언하는 것을 방지한다.
    // 파라미터는 따로 선언하지 않으면 암묵적으로 any를 선언하는데 이 옵션이 잠겨있으면 에러가 뜬다.
    // 파라미터의 타입은 파라미터 뒤에 콜로으로 명시하고, 함수의 리턴값의 타입은 함수 괄호 뒤에 콜론으로 명시한다.
    function addToCart(id: string, quantity: number): boolean {
        if (stock[id] < quantity) {
            return false;
        }

        stock[id] -= quantity;
        for (let i = 0; i < quantity; i++) {
            cart.push(id);
        }

        return true;
    }

    // 파라미터를 쓸수도 있고 안쓸수도 있는 경우
    // 파라미터 뒤에 물음표를 써주면 optional이 된다.
    // default를 주는 경우 자료형 뒤에 =로 기본값을 표시한다
    function addToCart2(id: string, quantity: number = 1, param?: string): boolean {
        if (stock[id] < quantity) {
            return false;
        }

        stock[id] -= quantity;
        for (let i = 0; i < quantity; i++) {
            cart.push(id);
        }

        return true;
    }

    // rest parameter 문법을 쓰는 경우 타입 정의 -> 배열로 지정
    function addManyToCart(...ids: string[]) {
        for (const id of ids) {
            addToCart2(id);
        }
    }

    // 사용자 정의한 함수를 값으로 사용하는 경우 (여기에선 프로퍼티처럼 사용),
    // => 를 사용해 리턴 값을 정의한다.
    const codeitmall: {
        stock: { [id: string]: number };
        cart: string[];
        addToCart2: (id: string, quantity?: number) => boolean;
        addManyToCart: (...ids: string[]) => void; // 값을 리턴하지 않는 경우 void 타입 지정
    } = {
        stock: {
            c001: 3,
            c002: 1,
        },
        cart: [],
        addToCart2,
        addManyToCart,
    };
}

{
    // 6. Enum : 열거형, JS에 없는 문법
    // 값의 종류를 미리 나열할 수 있는 경우에 사용

    enum Size {
        S,
        M,
        L,
        XL,
    }

    let product: {
        id: string;
        name: string;
        price: number;
        membersOnly?: boolean;
        sizes: Size[]; // 타입으로 Enum을 쓰려면 객체 이름만 쓰면 되고,
    } = {
        id: 'c001',
        name: '코드잇 블랙 후디',
        price: 129000,
        sizes: [Size.M, Size.L], // 값으로 쓰려면 객체처럼 점(.) 표기법을 쓰면 된다.
    };

    console.log(Size.S);
    console.log(Size.M);
    console.log(Size.L);
    console.log(Size.XL);

    // Enum의 기본 값은 0부터 시작하는 정수이다.
    // JS에서는 0이 false처럼 동작하기 때문에 주의해야한다.
    // 차라리 대입 연산자로 값을 정해놓고 하는 것이 더 좋다.
    enum Size2 {
        S = 'S',
        M = 'M',
        L = 'L',
        XL = 'XL',
    }
}

{
    // 7. Interface
    // 객체 타입을 정의할 때 같은 코드를 여러군데서 써서 비효율적이다.
    // 인터페이스는 대문자로 시작하는 것이 일반적이다.
    // 객체처럼 인터페이스의 이름은 타입의 이름이 된다.

    enum Size {
        S = 'S',
        M = 'M',
        L = 'L',
        XL = 'XL',
    }

    interface Product {
        id: string;
        name: string;
        price: number;
        membersOnly?: boolean;
    }

    // 인터페이스는 상속이 가능하다!
    // extends 키워드로 상속받으면 된다.
    interface ClothingProduct extends Product {
        sizes: Size[];
    }

    // 콜론 뒤에 인터페이스의 이름을 적으면 해당 타입이 적용된다.
    const product1: ClothingProduct = {
        id: 'c001',
        name: '코드잇 블랙 후드 집업',
        price: 129000,
        membersOnly: true,
        sizes: [Size.M, Size.L],
    };

    const product2: Product = {
        id: 'd001',
        name: '코드잇 텀블러',
        price: 25000,
    };

    function printProduct1(product: Product) {
        console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
    }

    // 인터페이스로 함수의 타입도 정의할 수 있다.
    // (괄호 열고 파라미터 정의하고) 괄호닫고 리턴타입 정의한다.
    interface PrintProductFunction {
        (product: Product): void;
    }

    const printProduct: PrintProductFunction = (product) => {
        console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
    };

    printProduct1(product1);
    printProduct(product2);
}

{
    // 8. 리터럴 타입
    // const 변수는 값이 바뀔 일이 없으니까 값 자체를 타입으로 본다.

    let productName1 = '코드잇 블랙 후드'; // string
    const productName2 = '코드잇 텀블러'; // "코드잇 텀블러" <- 리터럴 타입, 변수의 값을 곧 타입으로

    let small = 95; // number
    const large = 100; // 100, 리터럴

    // 숫자형 리터럴과 문자형 리터럴 이 있다.
    // 숫자형을 리턴하는 함수에서 숫자형 리터럴을 쓸 수 있고,
    // 문자형을을 리턴하는 함수에서 문자형 리터럴을 쓸 수 있다.
}

{
    // 9. 타입 별칭
    // 타입도 변수처럼 이름을 붙여줄 수 있다.
    // 타입 별칭은 모든 타입에 사용할 수 있다.

    const cart: string[] = ['c001', 'c001', 'c002'];

    interface User {
        username: string;
        email: string;
        cart: string[];
    }

    // 위의 경우 string[]이 반복됨,
    // 타입이 변경되면 반복되는 곳에서 모두 변경해야해서 유지보수도 어려움

    type Cart = string[];

    const cart2: Cart = ['c001', 'c001', 'c002'];

    interface User2 {
        username: string;
        email: string;
        cart: Cart;
    }

    // 함수에 타입별칭 사용하기
    type CartResultCallbock = (result: boolean) => void;

    // 객체에도 쓸 수 있다. // 하지만 interface 사용하는 것이 더 좋다.
    type Product = {
        id: string;
        name: string;
    };

    const user: User = {
        username: 'codeit',
        email: 'typescript@codeit.kr',
        cart,
    };
}

{
    // 10. Union 타입
    // 타입으로 연산도 할 수 있다.

    // 코드 설명 : 상품 인스턴스를 상속받아 의류 상품 객체를 만들고, 상품 인스턴스를 상속받아 신발 상품 객체를 만들었다.
    // 두 타입은 sizes 프로덕트가 있는 것은 같은데 사이즈의 기준이 달라서 타입은 다르다.
    // 이런 상황에서 size를 출력하는 함수를 만들고자 하는데, Product 인스턴스에는 sizes라는 프로덕트가 없어서 오류가 난다.
    // 파라미터로 Clothing을 받으면 Shoe가 안되고 Shoe를 받으면 Clothing이 안되는 상황에서 Union 사용

    enum ClothingSize {
        S = 'S',
        M = 'M',
        L = 'L',
        XL = 'XL',
    }

    // enum 대신 문자열 리터럴 사용할 수 있다.
    // 언제 enum을 쓰고, 언제 리터럴을 사용해야할까?
    type ClothingSize2 = 'S' | 'M' | 'L' | 'XL';

    interface Product {
        id: string;
        name: string;
        price: number;
        membersOnly?: boolean;
    }

    interface ClothingProduct extends Product {
        sizes: ClothingSize[];
        color: string;
    }

    // Union은 리터럴 타입과 같이 쓰면 유용하다.
    // 타입으로 올 수 있는 값에 제약을 두는 것
    type ShoeSize = 220 | 22 | 230 | 235 | 240 | 245 | 250 | 255 | 260 | 265 | 270 | 275 | 280 | 285 | 290 | 295 | 300;

    interface ShoeProduct extends Product {
        sizes: ShoeSize[];
        handmade: boolean;
    }

    // Uion 사용 (ClothingProduct 이거나 ShoeProduct인 경우로 사용됨)
    function printSizes(product: ClothingProduct | ShoeProduct) {
        const availableSizes = product.sizes.join(', ');
        console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);

        // 특정 프로퍼티에 접근하고 싶은경우 if 문과 in 연산자 활용
        // ClothingProduct 안에만 있는 color 사용
        if ('color' in product) {
            console.log(`색상 ${product.color}`);
        }
        // ShoeProduct 안에만 있는 handmade 사용
        if ('handmade' in product) {
            console.log(product.handmade ? '이 상품은 장인이 직접 만듭니다.' : '이 상품은 공장에서 만들어졌습니다.');
        }
    }
}
