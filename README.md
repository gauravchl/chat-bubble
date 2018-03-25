# chat-bubble
A chat bubble for your terminal, wrap test into speech bubble

**Usage:**

```
const chatBubble = require('chatBubble');
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
