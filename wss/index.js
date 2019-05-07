const WebSocket = require("ws");

const ws = new WebSocket("wss://ws-feed.prime.coinbase.com");

ws.on("open", () => {
  ws.send(
    JSON.stringify({
      type: "subscribe",
      channels: [{ name: "ticker", product_ids: ["ETH-USD"] }]
    })
  );
  //   ws.send(JSON.stringify({ message: "hello" }));
});

ws.on("message", response => {
  console.log(response);
});
