export const PASSWORD_IS_VALID = new RegExp(
  '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
);
export const INPUT_RULE = new RegExp('[A-Za-z0-9]+');
export const REQUEST_URL = 'http://10.0.2.2:8080';
export enum MODES {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
