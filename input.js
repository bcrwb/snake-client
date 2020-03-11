let connection;
const setUpInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();

    const handleUserInput = (()=>{
        stdin.on('data', (key)=>{
            if(key === '\u0003'){
                process.exit();
            }if(key === 'w'){
                connection.write('Move: up');
            }if(key === 'a'){
                connection.write('Move: left');
            }if(key === 'd'){
                connection.write('Move: right');
            }if(key === 's'){
                connection.write('Move: down');
            }if(key === 'l'){
                connection.write('Say: LOSER');
            }if(key === 'y'){
                connection.write('Say: YOU SNAKE');
            }
        })
    })
    handleUserInput();
    return stdin;
  }

  module.exports = {setUpInput}