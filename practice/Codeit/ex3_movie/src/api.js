// fetch를 호출하고 받은 response body를 리턴하는 함수
// export async function getReviews(order = "createdAt") {
//   const query = `order=${order}`;
//   const response = await fetch(
//     "https://learn.codeit.kr/9820/film-reviews?" + query
//   );
//   const body = await response.json();
//   return body;
// }

// offset으로 페이지네이션
// 이 api에서 offset은 지금 받아온 개수, limit은 추가로 받아올 개수다.
// export async function getReviews({
//   order = "createdAt",
//   offset = 0,
//   limit = 6,
// }) {
//   const query = `order=${order}&offset=${offset}&limit=${limit}`;
//   const response = await fetch(
//     `https://learn.codeit.kr/9820/film-reviews?${query}`
//   );
//   const body = await response.json();
//   return body;
// }

// 공통된 URL 상수
const BASEURL = "https://learn.codeit.kr/9820/film-reviews";

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  // throw new Error("버그가 아니라 기능입니다.");  // 고의로 오류 발생
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${BASEURL}?${query}`);
  // const body = await response.json(); // 리스폰스에 상관없이 항상 json 메소드를 실행하면 리스폰스가 무엇이든 json형식이 입력되지 않았다고 뜬다.
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다.");
  } else {
    const body = await response.json();
    return body;
  }
}

export async function createReview(formData) {
  const response = await fetch(BASEURL, {
    // fetch함수 두번째 파라미터로 형식과 내용 지정
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}


export async function updateReview(id, formData) {  // 파라미터로 수정할 게시글의 id값을 받아야한다.
  const response = await fetch(`${BASEURL}/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 수정하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function deleteReview(id) {  // 파라미터로 수정할 게시글의 id값을 받아야한다.
  const response = await fetch(`${BASEURL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("리뷰를 삭제하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
