(function () {
  const input = document.querySelector("#event-input");
  const logger = document.querySelector(".logger");

  addListenerMulti(
    input,
    "keyup keydown keypress change input beforeinput",
    eventHandler
  );

  function eventHandler(e) {
    const data = `
      <span class="red">type: ${e.type}</span><br>
      timeStamp: ${e.timeStamp.toFixed(2)} ms<br>
      keyCode: ${e.keyCode}<br>
      <span class="green">key: ${e.key}</span><br>
      -------------------------------------------<br>
    `;

    logger.insertAdjacentHTML("beforeend", data);
    console.log(e);
  }

  function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(" ");
    for (var i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }
})();
