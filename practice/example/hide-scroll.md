# Hide Scroll Bar

  import styled from 'styled-components'
  
  const ScrollContainer = styled.div`
    overflow-y: scroll; /* 세로 스크롤이 필요한 경우에만 스크롤바를 표시 */
    scrollbar-width: none; /* Firefox에 스크롤바 숨기기 */
    -ms-overflow-style: none; /* Internet Explorer에 스크롤바 숨기기 */
    /* WebKit 브라우저(예: Chrome, Safari)에서 스크롤바 숨기기 */
    &::-webkit-scrollbar {
      display: none; /* 스크롤바 숨김 */
    }
  `

  .
  .
  .
  
  return (
    <ScrollContainer>
      {스크롤 바 숨길 컨텐츠}
    </ScrollContainer>
  )
  
