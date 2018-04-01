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

| Parameter      | Type   | Description                                                           |
| -------------- | ------ | --------------------------------------------------------------------- |
| boxWidth       | number | width of the box, default: 30                                         |
| boxType        | string | single, double, round(default), single-double, double-single, classic |
| spikePosition  | number | position of spike from left, default: 10                              |
| spikeDirection | string | 'right' or 'left', default is 'right'                                 |

**Contributing**

Please feel free to submit any bugs or suggestions as issues. Pull requests are welcome.
