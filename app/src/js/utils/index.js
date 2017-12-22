import _ from 'lodash';

export const rules = [
  {
    type: 'email',
    regExp: /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/,
  },
  {
    type: 'phone',
    regExp: /^([0-9]{4})-([0-9]{4})$/, // 0000-0000
  },
  {
    type: 'identification',
    regExp: /^([0-9]{1})-([0-9]{4})-([0-9]{4})$/, // 0-0000-0000
  },
  {
    type: 'password',
    regExp: /^[A-Za-z\d\s@$!%*?&.()-_]{8,16}$/, // Min 8, Max 16
  },
  {
    type: 'text',
    regExp: /^[a-zA-Z]*$/,
  },
];

export function getRegExp(type) {
  const item = _.find(rules, { type });
  return item.regExp;
}

export function validateExp({ type, value }) {
  const regExp = getRegExp(type);
  if (regExp.test(value)) return true;
  return false;
}
