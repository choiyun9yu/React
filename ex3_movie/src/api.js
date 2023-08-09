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
export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://learn.codeit.kr/api/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}
