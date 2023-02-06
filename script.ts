const number: number = 12;
const str: string = "waihin";
const isLoad: boolean = true;

interface user {
  name: string;
  age: number;
  email: string;
}
interface NewInter {
  num1: number;
  num2?: number;
  name?: string;
}
interface Props extends NewInter {
  users: user[];
  fetchData: (url: string) => void;
}

const fetchData = (url: string) => {
  console.log(url);
};

const calculate = (params: Props): number => {
  params.fetchData("hello");
  console.log(params.users[1].name);
  if (params.num2) return params.num1 * params.num2;
  return params.num1;
};

console.log(
  calculate({
    num1: 99,
    num2: 33,
    users: [
      { name: "wai", age: 12, email: "wai@gmail.com" },
      { name: "hin", age: 12, email: "wai@gmail.com" },
    ],
    fetchData,
  })
);
