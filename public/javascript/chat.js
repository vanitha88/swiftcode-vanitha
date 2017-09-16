var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController', function ($scope){
	$scope.messages = [
	{   sender:"BOT",
		text:"Hi ",
		time:"1:13pm"
	},
	{    sender:"USER",
		text:"what data do u searching for",
		time:"1:14pm"
	},
	{    sender:"BOT",
		text:"betsol",
		time:"1:16pm"
	},
	{    sender:"USER",
		text:"Is this your data",
		time:"1:17pm"
	},
	{     sender:"BOT",
	      text:"thankyou",
	      time:"1:19pm" 

	}
	];
    var exampleSocket = new WebSocket("ws://localhost:9000/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   }
});