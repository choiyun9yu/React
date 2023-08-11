// // 커서 기반 페이지네이션 : https://learn.codeit.kr/api/foods?order=createdAt&limit=10
export async function getFoods({
  order = "createdAt",
  cursor = "",
  limit = 10,
  search = "",
}) {
  const query = `order=${order}&cursor=${cursor}&limit=${limit}&search=${search}`;
  const response = await fetch("https://learn.codeit.kr/9821/foods?" + query);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  } else {
    const body = await response.json();
    return body;
  }
}

// export async function getFoods({ order = "", cursor = "", limit = 10 }) {
//   const query = `order=${order}&cursor=${cursor}&limit=${limit}`;
//   const response = await fetch(`https://learn.codeit.kr/error/foods?${query}`);
//   if (!response.ok) {
//     throw new Error("데이터를 불러오는데 실패했습니다");
//   } else {
//     const body = await response.json();
//     return body;
//   }
// }

export async function createFoods(formData) {
  const response = await fetch("https://learn.codeit.kr/9819/foods", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
