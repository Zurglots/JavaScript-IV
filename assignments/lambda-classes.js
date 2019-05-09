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
    this.favSubjects = studentAttrs.favSubjects;
    // this.favSubjects = studentAttrs.favSubjects; // Let's see if this works.
    // this.favSubjects = ["Html", "CSS", "JavaScript"]; // I need to make this an array.
  }
  listsSubjects() {
    console.log(
      `These are ${this.name}'s favorite subjects: ${this.favSubjects}`
    );
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(student, subject) {
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
    console.log(
      `${this.name} announces to ${channel} @channel stand up time! `
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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

const django = new Instructor({
  name: "Django",
  location: "Belgium",
  age: 43,
  favLanguage: "Romani",
  specialty: "gypsy jazz",
  catchPhrase: `Parce-que je vous aime`
});

const ben = new Student({
  name: "Neb",
  location: "Hommieville",
  age: 27,
  favLanguage: "JavaScript",
  previousBackground: "Digital Marketer",
  specialty: "Fixin'",
  catchPhrase: `Percision is key`
});

const deku = new Student({
  name: "Midoriya",
  location: "Japan",
  age: 15,
  favLanguage: "Pork Cutlet Bowl",
  previousBackground: "Quirkless Student",
  specialty: "One For All Jr.",
  catchPhrase: `PLUS ULTRA`,
  favSubjects: ["Hero Powers", " Uraka", " Physical Training."]
});

const aizawa = new Projectmanagers({
  name: "Eraser Head",
  location: "Japan",
  age: 35,
  favLanguage: "Korean BBQ",
  specialty: "Erasing Quirks",
  catchPhrase: `Remember where you started`,
  gradClassName: "Hosu Heros",
  favInstructor: "Nemuri Kayama"
});

const allMight = new Projectmanagers({
  name: "All Might",
  location: "Japan",
  age: 32,
  favLanguage: "Ramen",
  specialty: "One For All",
  catchPhrase: `Everything is fine now, DETROITU SMAAASH`,
  gradClassName: "1000%",
  favInstructor: "Cementoss"
});

fred.speak();
fred.grade(ben, "HTML"); // How do I pass in a name from another obj? fred.grade.{const}?
console.log(fred.catchPhrase);

django.demo("gitar");

deku.listsSubjects();

deku.sprintChallenge(deku, "One For All.");

deku.PRAssignment("One For All.");

aizawa.standup("Class A");

allMight.debugsCode(deku, "Justice for All.");
