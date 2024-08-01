import Module from "./module";

export class Auth extends Module {
  login(email: string, password: string) {
    return this.post('/login', {
      email,
      password
    })
  }

  logout() {
    return this.post('/logout')
  }
}