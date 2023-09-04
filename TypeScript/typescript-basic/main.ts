
{ // 1. 변수 이름 뒤에 콜론을 써서 타입 지정 (타입은 코드 검사에만 쓰이고 실제 동작에는 활용 X)
    let size: number;          // 타입 초기화
    let size2: number = 100;    // 타입 초기화 및 할당

    // 기본 자료형
    let itemName: string = '코드잇 블랙 후드';
    let itemPrice: number = 129000;
    let membersOnly: boolean = true;
    let owner: undefined = undefined;
    let seller: null = null;

    let num = 2/0;      // Inf <- 숫자형
    let num2 = 0/0;     // NaN <- 숫자형
}


{ // 2. 배열 
    const cart: string[] = [];
    cart.push('c001');
    cart.push('c002');
    // cart.push(003); 타입 오류

    // 2차 문자 배열
    const carts: string[][] = [
        ['c001', 'c002'],
        ['c003'],
    ];

    // 배열에는 사이즈 제한이 없어서 빈 배열을 해도 타입 오류가 나지 않음
    let mySize: number[] = [167, 28];
    mySize = [167, 28, 255];
    mySize = [255];
    mySize = []

    // 배열이지만 개수를 명확히 정하고 싶으면 튜플 타입을 쓴다.
    // ! 배열 안에 모든 자료형이 같을 필요는 없다.
    let mySize2: [number, number] = [167, 28];
    // mySize = [167, 28, 255];     // 타입 오류
    // mySize = [255];              // 타입 오류
    // mySize = []                  // 타입 오류
}


{ // 3. 객체타입
    let product: {
        id: string;
        name: string;
        price: number;
        membersOnly?: boolean;  // ?로 옵셔널 프로퍼티 만듬
        sizes: string[];
    }

    // 객체의 프로퍼티 이름에 변수를 쓰고 싶으면 JS에서는 
    let field = 'field name';
    let obj = {
        [field] : 'filed value'
    };

    // 타입스크립트 에서는 프로퍼티 개수를 알 수 없거나 갯수를 정하고 싶지 않은 경우에 프로퍼티의 타입만 지정 가능
    let stock: {
        [id: string] : number;  // 프로퍼티 이름으로 아무 문자열이나 쓸 수 있고, id라는 건 아무렇게나 적어도 상관없는 이름, 프로퍼티의 밸류는 숫자형
    } = {
        c001: 3,
        c002: 0,
        c003: 1,
        // c004:: 'codeit', 타입 오류
    };
}


{ // 4. any
    const product2 = {
        id: 'c001',
        name: '코드잇 블랙 후디',
        price: 129000,
        size: ['M', 'L', 'XL'],
    };
    // console.log(product2.revivews[2]); 타입 오류

    const product3: any = {
        id: 'c001',
        name: '코드잇 블랙 후디',
        price: 129000,
        size: ['M', 'L', 'XL'],
    };
    console.log(product3.revivews[2]);

    // as 키워드로 프로퍼티의 타입 정의
    const parsedProduct = JSON.parse(
        '{"name": "코드잇 토트백", "price":12000}'
    ) as {
        name: string;
        price: number;
    }

    // (:) 콜론으로 타입 명시해주기
    const parsedProduct2: {
        name: string;
        price: number;
    } = JSON.parse(
        '{"name": "코드잇 토트백", "price":12000}'
    ) as {
        name: string;
        price: number;
    }

    // 꺽쇠로 타입 정의하는 건 요즘 JS에서 꺽쇠를 많이 써서 사용하지 않음
    const parsedProduct3 = <{
        name: string;
        price: number;
    }>JSON.parse(
        '{"name": "코드잇 토트백", "price": 12000}'
    );
}


{ // 5. 함수에 타입 정하기
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

    // 앞에서 정의한 함수를 객체 내부 프로퍼티로 넣어줌, 
    // 객체 내부 메소드의 리턴값 정의는 => 를 사용해준다.
    const codeitmall: {
        stock: { [id: string]: number };
        cart: string[];
        addToCart2: (id: string, quantity?: number) => boolean;
        addManyToCart: (...ids: string[]) => void;
    } = {
        stock: {
            c001: 3,
            c002: 1,
        },
        cart: [],
        addToCart2,
        addManyToCart
    };

    // rest parameter 문법을 쓰는 경우 타입 정의
    // rest parameter이기 때문에 배열로 지정
    function addManyToCart(...ids: string[]) {
        for (const id of ids) {
            addToCart2(id);
        }
    }    
}