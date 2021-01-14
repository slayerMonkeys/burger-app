export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  let errorMessage = null;

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
    if (!isValid) errorMessage = "This input is required";
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (errorMessage === null && !isValid)
      errorMessage = "minimum " + rules.minLength + " characters are required";
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if (errorMessage === null && !isValid)
      errorMessage = "you need a maximum of " + rules.maxLength + " characters";
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
    if (errorMessage === null && !isValid) errorMessage = "Email is not valid";
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
    if (errorMessage === null && !isValid) errorMessage = "is not a number";
  }
  return {
    isValid: isValid,
    errorMessage: errorMessage,
  };
};
