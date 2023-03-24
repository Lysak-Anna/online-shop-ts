import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const BackLinkArrow = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 12px;
  margin-left: 16px;
  &:hover {
    color: #e9322e;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #e9322e;
`;
