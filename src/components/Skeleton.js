import React from 'react';
import styled, { keyframes } from 'styled-components';

function Skeleton() {
  const skeletonArr = Array.from({ length: 10 }, (_, idx) => idx + 1);
  const skeletonItems = skeletonArr.map(key => <SkeletonItem key={key} />);

  return <SkeletonList>{skeletonItems}</SkeletonList>;
}

const skeletonMove = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }

`;
const SkeletonList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SkeletonItem = styled.li`
  width: 100%;
  height: 144px;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  margin: 10px 0;
  border-radius: 1rem;
  animation: ${skeletonMove} 1300ms ease-in-out infinite;
  background-size: 200px 100%;
  background-repeat: no-repeat;
`;

export default Skeleton;
