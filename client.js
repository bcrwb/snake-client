const net = require('net');
const stdin = process.stdin;




  
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  stdin.setEncoding('utf8');
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  stdin.on('data', (input) => {
    let name = input[0] + input[1] + input[2]
   
  console.log('Name:', name);
  conn.write(name);
 
  
});

  conn.on('connect', () => {
    console.log('Connected to the server');
    
  });


  return conn;
}



module.exports = connect;