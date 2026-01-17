const validateInputField = (email, password, name, isSignedUp) => {
  email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  name = /^[A-Za-z ]{2,50}$/.test(name);

  if (!email)
    return "Sorry, we can't find an account with this email address. Please try again or create a new account.";
  if (!password)
    return "Your password must contain between 4 and 60 characters.";
  if (!name && isSignedUp) return "Enter Valid Name";

  return null;
};

export default validateInputField;
