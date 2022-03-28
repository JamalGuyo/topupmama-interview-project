export interface Token {
  type: 'Bearer' | 'JWT';
  token: string;
  refreshToken: string;
}
