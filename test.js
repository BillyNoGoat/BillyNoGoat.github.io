alert("v1");
var ifrLocalStorage = iframe.contentWindow.localStorage;
var token = ifrLocalStorage.getItem('token');
alert(token);
