import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  alpha_num as alphaNum,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    // defineRule("required", (value) => {
    //   if (!value || !value.length) {
    //     return "This field is required";
    //   }
    //   return true;
    // });
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("alpha_num", alphaNum);
    // defineRule("confirmed", (value, [target], ctx) => {
    //   if (value === ctx.form[target]) {
    //     return true;
    //   }
    //   return "Passwords must match";
    // });
    defineRule("confirmed", confirmed);
    defineRule("excluded", excluded);
  },
};
