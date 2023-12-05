import { CanActivateFn } from '@angular/router';
import { FakeLoginGuardService } from './fake-login-guard.service';
import { inject } from '@angular/core';

export const secuAccessGuard: CanActivateFn = (route, state) => {

  let fakeAuthService = inject(FakeLoginGuardService)

  if(fakeAuthService.statusAuth)
    return true
  else
    return false


}
