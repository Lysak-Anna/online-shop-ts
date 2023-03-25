import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { GiShoppingCart } from 'react-icons/gi';

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
export const StyledUser = styled(AiOutlineUser)`
  width: 30px;
  height: 30px;
  &:hover {
    color: #e9322e;
  }
`;
export const StyledCart = styled(GiShoppingCart)`
  width: 30px;
  height: 30px;
  &:hover {
    color: #e9322e;
  }
`;
