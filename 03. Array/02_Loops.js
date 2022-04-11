//Array
const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

//Note: For Loop
for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") break;
  console.log(myStates[i]);
}

//Note: For-Each
myStates.forEach((s) => console.log(s));

//Note: For of (Mainly used for Array)
for (const n of myStates) {
  console.log(n);
}

//Note: For in (Mainly used for objects)
//Object
const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};

for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}

//Note: While Loop
while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}

//Note: Do-while
let i = 20;
do {
  console.log(i);
  i++;
} while (i < 10);
