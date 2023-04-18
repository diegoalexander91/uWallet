export interface Auth {
    ok: boolean;
    usuario?: Usuario;
    token?: string;
    msg?: string;
}

export interface Usuario {
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
