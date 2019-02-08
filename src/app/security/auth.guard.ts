import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { SecurityService } from "./security.service";

@Injectable({
  providedIn: "root"
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session && session.expirationDate > Date.now()) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(["forbidden"]);
    return false;
  }
}
