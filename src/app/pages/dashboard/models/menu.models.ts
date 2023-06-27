export interface MenuItem {
  group: string;
  separator?: boolean;
  selected?: boolean;
  active?: boolean;
  items: Array<SubMenuItem>;
}

export interface SubMenuItem {
  icon?: string;
  label?: string;
  route?: string | null;
  expanded?: boolean;
  active?: boolean;
  children?: Array<SubMenuItem>;
}

export interface Usuario {
  ok: boolean;
  usuario: UsuarioClass;
  token: string;
}

export interface UsuarioClass {
  dn: string;
  distinguishedName: string;
  userPrincipalName: string;
  sAMAccountName: string;
  mail: string;
  whenCreated: string;
  pwdLastSet: string;
  userAccountControl: string;
  employeeID: string;
  sn: string;
  givenName: string;
  cn: string;
  displayName: string;
  description: string;
}