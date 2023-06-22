export const hasValue = (value: String) => {
  return value.length > 0;
};

export const hasMinLength = (value: String, minLength: number) => {
  return value.length >= minLength;
};

export const exectLength = (value: String, length: number) => {
  console.log(value.length);
  return value.length == length;
};
