// fetch를 호출하고 받은 response body를 리턴하는 함수
export async function getReviews() {
  const response = await fetch("https://learn.codeit.kr/9820/film-reviews");
  const body = await response.json();
  return body;
}
