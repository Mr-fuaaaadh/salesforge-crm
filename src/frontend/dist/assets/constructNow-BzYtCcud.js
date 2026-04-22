import { c as constructFrom } from "./format-MbcRETyn.js";
function constructNow(date) {
  return constructFrom(date, Date.now());
}
export {
  constructNow as c
};
