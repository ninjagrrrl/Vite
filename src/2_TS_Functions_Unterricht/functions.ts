// # Functions
// - Functions sind grundlegende Bausteine in JS/TS und in vielen anderen Programmiersprachen. Sie sind eigenständige Codeblöcke, die bestimmte Aufgaben ausführen. Sie können wiederverwendet werden, um den Code modularer und wartbarer zu gestalten.

// ! Deklarieren
function sayHi() {
  console.log("Hallo Jule");
}

// - sayHi ist der Name der Funktion
// - Bereich zwischen {} ist Funktionskörper. Da kommt rein, was die Funktion machen soll.
// - ERST wenn eine Funktion aufgerufen wird, wird sie ausgeführt. vorher erscheint sie nicht im console, denn manchmal möchte man das verzögern. so kann die funktion auf einen button legen: wenn User zb auf einen best. Button klickt, wird sie ausgeführt

// ! Aufrufen: hier werden die Argumente mitgegeben
sayHi();
sayHi();
sayHi();
sayHi();
// - hier steht die Funktion jetzt 4 mal in der Konsole, man kann sie so ift aufrufen, wie man will

// # Functions mit Parametern
// - Parameter machen die FUnktion flexibler und wiederverwendbarer: sie ist WIE ein let, ist eine PLATZHALTERVARIABLE
// ! Deklarieren: hier ist der NAme noch ein Platzhalter
// - Funktionennamen können nur einmal belegt werden
// - firstName: string: das hier ist ein PLATZHALTR
function sayHello(firstName: string) {
  console.log(`Hallo ${firstName}`);
}

// - AUFRUFEN: hier muss ein String aufgerufen werden, weil oben haben wir das definiert. hier sieht man, die Funktion wird für verschiedene Fälle wiederverwendbar, wegen den Parametern
sayHello("Hao");
sayHello("Mina");
sayHello("Elmin");

// - so geht's auch
const name = "Max";
sayHello(name);

// wenn ich zwei zahlen addieren will, brauche ich zwei platzhalter
// console.log zeigt an dieser stelle an: ich erwarte dass zwei zahlen addiert wrden
function addMe(zahl1: number, zahl2: number) {
  console.log(zahl1 + zahl2);
}

// hier werden beim AUSFÜHREN der funktion spezifische werte zugewiesen
addMe(40, 30);
addMe(9, 67);
// addMe("5", "4"); //Javacript würde an dieser Stelle "54" als String rausgeben. TS zeigt uns, dass "String" dem Parameter vom Typ "number" nicht zugewiesen werden kann

// # Funktionen mit Rückgabewert
// -> die Funktion gib einen Wert zurück

function addTwenty(inputNumber: number) {
  // console.log(inputNumber + 20);
  return inputNumber + 20; // mit return gibt man etwas aus der Funktion zurück, sonst bleibt es in der Funktion
}

// let newNumber = addTwenty(5); // Konsole zeigt an: 25

let newNumber = addTwenty(5);
console.log(newNumber);

function mixer(zutat1: String, zutat2: String) {
  let smoothie = `Hmmm ein leckerer ${zutat1}-${zutat2} Smoothie - Biteschön!`;
  return smoothie;

  //ODER
  // return `Hmmm ein leckerer ${zutat1}-${zutat2} Smoothie - Biteschön!`
}

let meinSmoothie = mixer("Banane", "Erdbeere");
console.log(meinSmoothie);

// # optionale Parameter => mit ?
// - die optionalen Parameter stehen immer hinten, firstName kann also nicht optional sein
function greetUser(firstName: string, lastName?: string) {
  if (lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
  } else {
    console.log(`Hello ${firstName}`);
  }
}

greetUser("Marco");
greetUser("Marco", "Orlandi");

// # Default Parameter
// -> Voreinstellung oder Standardwert
// -> wenn kein Wert vergeben wird, nimmt es den Default Wert an
// also hier: es wird defaultmäßig ein Gericht bestellt
function orderFood(meal: string, quantity: number = 1) {
  const orderConfirmation = `Successfully ordered ${meal} ${quantity} times`;
  console.log(orderConfirmation);
}

orderFood("Pizza Funghi", 10);
orderFood("Pizza Tonno"); //Max vergisst für sich quantity einzugeben, aber default wert ist 1, d.h. kein problem

// # Gültigkeitsbereich von Variablen = Scope
// -> globale vs. lokale Variablen

// GLOBALE Variablen werden AUSSERHALB von Funtionen und Codeblöcken definiert, bedeutet ich kann in meinem gesamten Code auf die Variable zugreifen. ÜBERALL sichtbar
const globaleVariable = "Marzio";

function printName() {
  // LOKALE Variable wird INNERHALB von Funktionen, Schleifen, if-Anweisungen, Codeblock INNERHALB G{} geschweifter Klammern gültig etc. definiert und gilt auch nur dort
  //   also WO lokale Variable gültig ist, hängt von ihren geschweiften Klammern ab. NUR in ihren { } ist sie gültig
  const lokaleVariable = "Costantini";
  console.log(`Hallo ${globaleVariable} ${lokaleVariable}`);
}

printName();

// console.log(lokaleVariable); // lokaleVariable wird nicht erkannt weil sie nur innerhalb ihre Codeblocks gültig ist

function printName2() {
  const lokaleVariable2 = "Costantini";
  console.log(`Hallo ${globaleVariable} ${lokaleVariable2}`);

  if (globaleVariable === "Marzio") {
    const nochEineLokaleVariable = "ist 'n dufter Typ";
    console.log(`${globaleVariable} ${nochEineLokaleVariable}`);
  } else {
    console.log(` Hallo ${globaleVariable} ${lokaleVariable2}`);
  }
}

// # BENENNUNGEN VON VARIABLEN

// -> beginne mit einem Kleinbuchstbaen
// -> camelCase
// -> Verb + Objekt (+ weitere Kriterien):
// z.B. function calculateAge() {} ODER createTemporaryFile() {}
// -> Abkürzungen vermeiden
// -> auf Einzahl/Merzahl achten: validiere ich mehrere oder ein Email? (validateEmail / validateEmails)
// -> get und set benutzen => falls ein Wert geholt oder gesetzt wird (good Practices)
// z.B. function getUserData() {}
// function setShoppingCart() {}
