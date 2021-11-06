const {connect} = require('./client');
const conn = connect();
const handleEvents = () => {
  // code that does something
  //console.log("Successfully connected to game server");
  conn.write("Name: SM");
  setInterval(() => {
    //conn.write("Move: up");
  },50);

  setTimeout(() => {
    setInterval(() => {
      //conn.write("Move: left");
    },51);
  },200);

  setTimeout(() => {
    setInterval(() => {
      // conn.write("Move: right");
    },52);
  },800);

  //1.
  //conn.write("Name: SM");
  //conn.write("Move: up");
  //conn.write("Move: up");
  //conn.write("Move: up");

  //2.

  /*conn.write("Name: SM");
  setTimeout(() => {
    conn.write("Move: up");
  },50);
  setTimeout(() => {
    conn.write("Move: up");
  },50);
  setTimeout(() => {
    conn.write("Move: up");
  },50); */

  //3.

  //conn.write("Name: SM");
  /* setInterval(() => {
    //conn.write("Move: up");
  },50); */
};

conn.on("connect", handleEvents);