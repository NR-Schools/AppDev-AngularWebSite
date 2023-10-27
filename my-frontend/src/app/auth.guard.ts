import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "./services/account.service";
import { Account } from "./models/account";

export const AuthGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const accountService: AccountService = inject(AccountService);

    const storedAcc = localStorage.getItem('account_info');

    if (storedAcc === null || storedAcc === undefined || storedAcc === "")
        return false;

    const account: Account = JSON.parse(storedAcc);

    if (account === null || account === undefined)
        return false;

    const email = account.email;

    if (email === null || email === undefined)
        return false;

    return true;
};


export const AdminAuthGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const storedAcc = localStorage.getItem('account_info');

    if (storedAcc === null || storedAcc === undefined || storedAcc === "")
        return false;

    const account: Account = JSON.parse(storedAcc);

    if (account === null || account === undefined)
        return false;

    const email = account.email;

    if (email === null || email === undefined)
        return false;

    return email.toLowerCase() === "admin";
};