let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
    const [{ title: t, age: a , skills: [,CSS] }] = myFriends;
    console.log(`${t}`);
    console.log(`${a}`);
    console.log(`available`);
    console.log(`${CSS}`);
}else if (chosen === 2) {
    const [,{ title: t, age: a , skills: [,Django] }] = myFriends;
    console.log(`${t}`);
    console.log(`${a}`);
    console.log(`Not available`);
    console.log(`${Django}`);
}else if (chosen === 3) {
    const [,,{ title: t, age: a , skills: [,Laravel] }] = myFriends;
    console.log(`${t}`);
    console.log(`${a}`);
    console.log(`available`);
    console.log(`${Laravel}`);
}
