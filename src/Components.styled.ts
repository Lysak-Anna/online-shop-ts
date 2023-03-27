import styled from '@emotion/styled';

import { Link, NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { GiShoppingCart } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { ImExit } from 'react-icons/im';

export const BackLinkArrow = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 12px;
  margin-left: 16px;
  &:hover {
    color: #e9322e;
  }
`;
export const StyledNavLink = styled(NavLink)`
  &:hover,
  &.active {
    color: #e9322e;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #e9322e;
`;
export const StyledUser = styled(AiOutlineUser)`
  width: 34px;
  height: 34px;
  &:hover {
    color: #e9322e;
  }
`;
export const StyledCart = styled(GiShoppingCart)`
  width: 34px;
  height: 34px;
  &:hover {
    color: #e9322e;
  }
`;
export const ProductAmount = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: #e9322e;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledGoogle = styled(FcGoogle)`
  margin-right: 8px;
`;
export const StyledExit = styled(ImExit)`
  width: 24px;
  height: 24px;
  margin-top: 10px;
  &:hover {
    color: #e9322e;
  }
`;
