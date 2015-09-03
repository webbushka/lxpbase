# lxpbase
Example for posting xml data to lxpbase using node

## Usage

Install and run the server
```
npm install
node index.js
```

Post to the server
```
// set the URL to wherever you run this code from
$.ajax({
  url: 'http://localhost:3000',
  type: 'POST',
  data: jsonData,
  contentType: 'application/json',
  success: function(data) {
    console.log("success");
  }
});
```

*Note: You need to copy .env.example to .env and set the PROVIDER and PASSWORD that lxpbase wants*
