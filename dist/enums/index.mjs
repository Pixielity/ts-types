/**
 * @pixielity/ts-types v1.0.3
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/enums/config-enviroment.enum.ts
var ConfigEnvironment = /* @__PURE__ */ ((ConfigEnvironment2) => {
  ConfigEnvironment2["NODE"] = "node";
  ConfigEnvironment2["BROWSER"] = "browser";
  ConfigEnvironment2["NEXTJS"] = "nextjs";
  ConfigEnvironment2["REACT_NATIVE"] = "react-native";
  ConfigEnvironment2["UNKNOWN"] = "unknown";
  return ConfigEnvironment2;
})(ConfigEnvironment || {});

// src/enums/param-type.enum.ts
var ParamType = /* @__PURE__ */ ((ParamType2) => {
  ParamType2["PARAM"] = "param";
  ParamType2["QUERY"] = "query";
  ParamType2["BODY"] = "body";
  ParamType2["REQUEST"] = "request";
  ParamType2["RESPONSE"] = "response";
  return ParamType2;
})(ParamType || {});

// src/enums/question-type.enum.ts
var QuestionType = /* @__PURE__ */ ((QuestionType2) => {
  QuestionType2["Input"] = "input";
  QuestionType2["Password"] = "password";
  QuestionType2["Confirm"] = "confirm";
  QuestionType2["List"] = "list";
  QuestionType2["Checkbox"] = "checkbox";
  QuestionType2["Number"] = "number";
  QuestionType2["Editor"] = "editor";
  return QuestionType2;
})(QuestionType || {});

export { ConfigEnvironment, ParamType, QuestionType };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map