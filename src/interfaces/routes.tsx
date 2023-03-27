import { ComponentType } from 'react';

export interface RouteProps {
  component: ComponentType<any>;
  redirectTo?: string;
}
