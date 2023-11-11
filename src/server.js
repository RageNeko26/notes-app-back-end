const Hapi = require("@hapi/hapi");
const routes = require("./routes")

const init = async() => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route(routes); 

  await server.start();

  console.log(`Server is running on port ${server.info.uri}`);
};

init();
