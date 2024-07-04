"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routs_1 = __importDefault(require("./routes/routs"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// app.get("/",(req ,res)=>{
//     res.send({flutter:'dev'});
// });
app.use("/", routs_1.default);
app.listen(3000, () => {
    console.log("server is running on the port 3000");
});
//# sourceMappingURL=index.js.map