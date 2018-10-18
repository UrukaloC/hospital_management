// @Injectable()
// export class LoginActivate implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean>|Promise<boolean>|boolean {
//     if (!authService.isLoggedIn()) {
//       router.navigate(['login']);
//     }
//     return true;
//   }
// }