const socketController = (socket) => {
  console.log("cliente conectado", socket.id);
  socket.on("disconnect", () => {
    console.log("cliente desconectado");
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    socket.emit('enviar-mensaje', payload);
  });
};

module.exports = {
  socketController,
};
