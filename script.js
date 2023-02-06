var number = 12;
var str = "waihin";
var isLoad = true;
var fetchData = function (url) {
    console.log(url);
};
var calculate = function (params) {
    params.fetchData("hello");
    console.log(params.users[1].name);
    if (params.num2)
        return params.num1 * params.num2;
    return params.num1;
};
console.log(calculate({
    num1: 99,
    num2: 33,
    users: [
        { name: "wai", age: 12, email: "wai@gmail.com" },
        { name: "hin", age: 12, email: "wai@gmail.com" },
    ],
    fetchData: fetchData
}));
