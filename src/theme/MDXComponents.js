import React from "react";
// 원본 매퍼 가져오기
import MDXComponents from "@theme-original/MDXComponents";
import Highlight from "@site/src/components/Highlight";

export default {
  // 기본 매핑 재사용
  ...MDXComponents,
  // "highlight" 태그를 <Highlight /> 컴포넌트에 매핑하세요!
  // `Highlight`는 MDX에서 `highlight`로 전달될 모든 속성을 받습니다.
  highlight: Highlight,
};
