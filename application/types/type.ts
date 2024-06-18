export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
  title: string;
  menuList: SideNavItem[];
};

export interface TaskCategory {
  title: string;
  tasks: string[];
}

export interface DragParams {
  catId: number;
  taskId: number;
}

export interface Country {
  name: string;
  code: string;
}

export type Data = {
  success: boolean;
  data?: any;
};