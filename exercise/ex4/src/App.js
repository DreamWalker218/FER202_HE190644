import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// =========================
// PART 1: PEOPLE
// =========================

const people = [
  { name: "Jack", age: 50 },
  { name: "Michael", age: 9 },
  { name: "John", age: 40 },
  { name: "Ann", age: 19 },
  { name: "Elisabeth", age: 16 },
];

const isTeenager = (person) => person.age >= 10 && person.age <= 20;

const firstTeenager = people.find(isTeenager);
const allTeenagers = people.filter(isTeenager);
const everyTeenager = people.every(isTeenager);
const anyTeenager = people.some(isTeenager);


// =========================
// PART 2: ARRAY REDUCE
// =========================

const array = [1, 2, 3, 4];

const sum = array.reduce((total, number) => total + number, 0);
const product = array.reduce((total, number) => total * number, 1);


// =========================
// PART 3: COMPANIES
// =========================

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [
  33, 12, 20, 16, 5, 54, 21, 44,
  61, 13, 15, 45, 25, 64, 32,
];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};


// 1. Print name of each company
const companyNames = companies.map((company) => company.name);


// 2. Companies started after 1987
const companiesAfter1987 = companies.filter(
  (company) => company.start > 1987
);


// 3. Retail companies, start + 1
const retailCompanies = companies
  .filter((company) => company.category === "Retail")
  .map((company) => ({
    ...company,
    start: company.start + 1,
  }));


// 4. Sort companies by end date ascending
const companiesByEnd = [...companies].sort(
  (a, b) => a.end - b.end
);


// 5. Sort ages descending
const agesDescending = [...ages].sort((a, b) => b - a);


// 6. Sum all ages
const ageSum = ages.reduce((total, age) => total + age, 0);


// 7. Object restructuring
const { name, category } = companies[0];

const newCompany = {
  name,
  category,

  print() {
    console.log(this.name);
  },
};


// 8. Function with unknown number of numbers
function sumNumbers(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}


// 9. Function with unknown arguments
function addToArray(...args) {
  const result = [];

  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      result.push(arg);
    }
  });

  return result;
}


// 10. Destructuring street
const {
  address: { street },
} = person;


// 11. Counter function
function createCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = createCounter();


// 12. URL query parameters
function getQueryParams(url) {
  const queryString = url.split("?")[1];

  if (!queryString) {
    return {};
  }

  const params = {};

  queryString.split("&").forEach((item) => {
    const [key, value] = item.split("=");

    params[key] = value;
  });

  return params;
}


// =========================
// PART 4: PROMISE
// =========================

function randomNumberPromise() {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) + 1;

    if (number > 5) {
      resolve(number);
    } else {
      reject("Error");
    }
  });
}


// =========================
// COMPONENT
// =========================

function App() {
  const [promiseResult, setPromiseResult] = useState("");

  const handlePromise = () => {
    randomNumberPromise()
      .then((number) => {
        setPromiseResult(`Random number: ${number}`);
      })
      .catch((error) => {
        setPromiseResult(error);
      });
  };

  return (
    <div className="container py-4">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Exercise 4
          </a>

          <div className="navbar-nav">
            <a className="nav-link" href="#people">
              People
            </a>

            <a className="nav-link" href="#companies">
              Companies
            </a>

            <a className="nav-link" href="#promise">
              Promise
            </a>
          </div>
        </div>
      </nav>


      {/* =========================
          PEOPLE
      ========================= */}

      <section id="people" className="mb-5">
        <h2>1. People - ES6 Array Methods</h2>

        <div className="card p-3 mt-3">

          <p>
            <strong>First teenager:</strong>{" "}
            {firstTeenager.name} - {firstTeenager.age}
          </p>

          <p>
            <strong>All teenagers:</strong>
          </p>

          <ul>
            {allTeenagers.map((person) => (
              <li key={person.name}>
                {person.name} - {person.age}
              </li>
            ))}
          </ul>

          <p>
            <strong>Every person is teenager:</strong>{" "}
            {everyTeenager.toString()}
          </p>

          <p>
            <strong>Any person is teenager:</strong>{" "}
            {anyTeenager.toString()}
          </p>

        </div>
      </section>


      {/* =========================
          REDUCE
      ========================= */}

      <section className="mb-5">
        <h2>2. Reduce and Arrow Function</h2>

        <div className="card p-3 mt-3">
          <p>
            <strong>Array:</strong> {array.join(", ")}
          </p>

          <p>
            <strong>Sum:</strong> {sum}
          </p>

          <p>
            <strong>Product:</strong> {product}
          </p>
        </div>
      </section>


      {/* =========================
          COMPANIES
      ========================= */}

      <section id="companies" className="mb-5">
        <h2>3. Companies, Ages and Object</h2>

        <div className="card p-3 mt-3">

          <h4>Company Names</h4>

          <ul>
            {companyNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>


          <h4>Companies Started After 1987</h4>

          <ul>
            {companiesAfter1987.map((company) => (
              <li key={company.name}>
                {company.name} - {company.start}
              </li>
            ))}
          </ul>


          <h4>Retail Companies</h4>

          {retailCompanies.map((company) => (
            <div className="border p-2 mb-2" key={company.name}>
              <p>Name: {company.name}</p>
              <p>Category: {company.category}</p>
              <p>Start: {company.start}</p>
              <p>End: {company.end}</p>
            </div>
          ))}


          <h4>Companies Sorted By End Date</h4>

          <ol>
            {companiesByEnd.map((company) => (
              <li key={company.name}>
                {company.name} - {company.end}
              </li>
            ))}
          </ol>


          <h4>Ages Descending</h4>

          <p>{agesDescending.join(", ")}</p>


          <h4>Sum Of Ages</h4>

          <p>{ageSum}</p>


          <h4>Object Destructuring</h4>

          <p>
            Name: {newCompany.name}
          </p>

          <p>
            Category: {newCompany.category}
          </p>

          <button
            className="btn btn-primary mb-3"
            onClick={() => newCompany.print()}
          >
            Print Company Name
          </button>


          <h4>Sum Numbers</h4>

          <p>
            sumNumbers(1, 2, 3, 4, 5) ={" "}
            {sumNumbers(1, 2, 3, 4, 5)}
          </p>


          <h4>Add To Array</h4>

          <p>
            {JSON.stringify(
              addToArray(1, 2, [3, 4], 5, [6, 7])
            )}
          </p>


          <h4>Street Destructuring</h4>

          <p>{street}</p>


          <h4>Counter</h4>

          <button
            className="btn btn-success"
            onClick={() => alert(counter())}
          >
            Call Counter
          </button>


          <h4 className="mt-4">URL Query Parameters</h4>

          <pre>
            {JSON.stringify(
              getQueryParams(
                "https://example.com?name=John&age=20"
              ),
              null,
              2
            )}
          </pre>

        </div>
      </section>


      {/* =========================
          PROMISE
      ========================= */}

      <section id="promise" className="mb-5">
        <h2>4. Promise</h2>

        <div className="card p-3 mt-3">

          <p>
            Random number must be larger than 5.
          </p>

          <button
            className="btn btn-danger"
            onClick={handlePromise}
          >
            Generate Random Number
          </button>

          {promiseResult && (
            <h4 className="mt-3">
              {promiseResult}
            </h4>
          )}

        </div>
      </section>

    </div>
  );
}

export default App;