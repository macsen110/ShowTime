import { getUsefulContents } from "./module1.js";
getUsefulContents("http://www.example.com", data => {
  doSomethingUseful(data);
});