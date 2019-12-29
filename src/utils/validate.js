export default ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = "Enter Email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        console.log(values);
        errors.email = "Invalid email address";
      }
    },

    password: value => {
      if (!value) {
        errors.password = "Enter Password";
      } else if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/i.test(value)) {
        errors.password = isAuth
          ? "Wrong Password"
          : "This password is too easy";
      }
    },
    username: value => {
      if (!value) {
        errors.username = "Enter Username";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.username = "Invalid Username";
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
