export const REGEX = {
  NUMERIC: /^(0|[+][1-9][0-9]*)$/,
  ONLY_APLHA: /^([A-Za-z]*)$/gm,
  PROXIMITY: /^[\d]+ ?[-] ?[\d]+ ?[a-zA-Z]+$/,
  NUMERIC_WITHOUT_ZERO_VALIDATION: /^(\d*)$/,
  ALPHANUMERIC: /^([a-zA-Z0-9]*)$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};
