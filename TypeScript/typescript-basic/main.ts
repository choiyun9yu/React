// 변수 이름 뒤에 콜론을 써서 타입 지정 (타입은 코드 검사에만 쓰이고 실제 동작에는 활용 X)
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

// 문자형 배열 
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

// 객체타입
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

// any
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

