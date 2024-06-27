type formValidation = {
  required: string,
  lessThanOrEqualTo8: string,
  lessThanOrEqualTo12: string,
  emailFormat: string,
  least8AlphanumericCharacters: string,
  numberOtherThanRegistration: string,
}

export const validation: formValidation = {
  required: 'この必須項目を入力してください',
  lessThanOrEqualTo8: '8文字以内で入力してください',
  lessThanOrEqualTo12: '12文字以内で入力してください',
  // greaterThanOrEqualTo8: '8文字以上で入力してください',
  // lessThan8: '8文字未満の文字数で入力してください',
  // greaterThanZero: '0文字より大きい文字数で入力してください',
  emailFormat: '正しいメースアドレス形式で入力してください',
  least8AlphanumericCharacters: '英数字8文字以上で入力してください',
  numberOtherThanRegistration: '登録以外の番号を指定してください',
}