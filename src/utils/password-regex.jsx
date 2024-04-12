export const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };