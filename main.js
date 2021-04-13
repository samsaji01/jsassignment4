fetch("https://samsaji01.github.io/jsAssignment3/Assignment3/products.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    appendData(data);
  });

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "margin");
    var h2 = document.createElement("h2");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var img = document.createElement("img");

    h2.innerHTML = data[i].productName;
    p2.innerHTML = "Price:- " + data[i].productCost;
    p3.innerHTML = data[i].productDescription;
    p4.innerHTML = "Feature:- " + data[i].productFeatures;
    img.src = data[i].productImage;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    mainContainer.appendChild(div);
  }
}
