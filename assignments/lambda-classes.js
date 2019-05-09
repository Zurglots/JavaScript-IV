// CODE here for your Lambda Classes

class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we learned about ${subject}!`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

// favSubjects = ['Html', 'CSS', 'JavaScript']

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    // this.favSubjects = studentAttrs.favSubjects; // Let's see if this works.
    this.favSubjects = ["Html", "CSS", "JavaScript"]; // I need to make this an array.
  }
  listsSubjects() {
    console.log(`These are ${name}'s favorite subjects: ${favSubjects}`);
  }

  PRAssignment(subject) {
    console.log(`${name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}

class Projectmanagers extends Instructor {
  constructor(pmattrs) {
    super(pmattrs);
    this.gradClassname = pmattrs.gradClassname;
    this.favInstructor = pmattrs.favInstructor;
  }

  standup(channel) {
    console.log(`${name} announces to ${channel} @channel stand up time! `);
  }

  debugsCode(name, student) {
    console.log(`${name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const ben = new Student({
  name: "Neb",
  location: "Hommieville",
  age: 27,
  favLanguage: "JavaScript",
  specialty: "Fixin'",
  catchPhrase: `Percision is key`
});

fred.speak();
fred.grade(ben, "HTML"); // How do I pass in a name from another obj? fred.grade.{const}?
console.log(fred.catchPhrase);
