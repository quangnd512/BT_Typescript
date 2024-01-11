// Định nghĩa một interface Person có các trường name (string), age (number), và email (string). 
// Sau đó, tạo một hàm nhận vào một đối tượng thuộc interface Person và in ra thông tin của người đó.

interface Person {
    name: string,
    age: number,
    email: string
}

function Students(people: Person): void {
    console.log("Name: "+people.name+", Tuổi: "+people.age+", Email: "+people.email);
}

// using interface
const person: Person = {
    name: "Quang",
    age: 20,
    email: "quangnd512@gmail.com"
}

Students(person);

