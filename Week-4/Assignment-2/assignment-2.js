function ajax(src, callback) {
  // your code here
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onload = () => {
    if (xhr.status === 200) {
      return callback(JSON.parse(xhr.responseText));
    } else {
      console.error("Error!", xhr.statusText);
    }
  };
  xhr.send();
}

// Use async await syntax to fetch from API
async function ajaxFetch(src, callback) {
  try {
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    await callback(data);
  } catch (error) {
    console.error(error);
  }
}

function render(data) {
  // your code here
  const productList = document.querySelector(".product-list");

  data.forEach((item) => {
    // document.createElement() and appendChild() methods are preferred.
    const productItem = document.createElement("div"); // Item container
    productItem.className = "product-item";
    productList.appendChild(productItem);

    // Dynamically build out div structure
    Object.keys(item).forEach((key) => {
      const div = document.createElement("div");
      div.className = key;

      if (key === "price") {
        div.textContent = priceFormatter(item[key]);
      } else {
        div.textContent = item[key];
      }
      productItem.appendChild(div);
    });
  });
}

function priceFormatter(price) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(price);
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
