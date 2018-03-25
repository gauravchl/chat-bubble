# chat-bubble
A chat bubble for your terminal.

**Usage:**

```
const chatBubble = require('node-chat-bubble');
const message = 'Hello World';
console.log(chatBubble.get(message));

const options = { boxWidth: 52 };
console.log(chatBubble.get(message, options))
```


**Options:**

Parameter | Type | Description
------|------ | -------------
options.boxWidth | number | width of the box


**Contributing**

Please feel free to submit any bugs or suggestions as issues. Pull requests are welcome.


**ToDo**

- Add spike and it's position
