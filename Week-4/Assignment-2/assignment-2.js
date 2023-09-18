function ajax(src, callback) {
  // your code here
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", src);
  xhr.send();
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
}
ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
