const app= require("./app");

const PORT=process.env.PORT;
const startApp = ()=>{
app.listen(PORT,()=>{
    console.log(`Auth Backend running on port http://localhost:${PORT}`);
});
};

startApp();