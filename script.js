const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

cat = {
        complain() {
            console.log("Meow!")
        },
    },

    cat.complain();

// question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";


// Question 3

heading.style.fontSize = "2em";

// Question 4 
heading.classList.add("subheading");

// question 5

var paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "#ff3030";

}

// Question 6

var resultContainer = document.querySelector(".results");

resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.background = "yellow";

// Question 7

function Listing(list) {
    for (var x = 0; x < list.length; x++) {
        var list1 = list[x].name;
        console.log(list1);

    }
}
Listing(cats);



// Question 8

function createCats(cats)

{
    let html = "";

    for (let y = 0; y < cats.length; y++) {

        let catsAge = "Age unknown";

        if (cats[y].age) {
            catsAge = cats[y].age;
        }

        html += `<div class="cats">
        <h5>${cats[y].name}</h5>
        <p> ${catsAge}</p>
        </div>`;

    };
    return html;

};

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;