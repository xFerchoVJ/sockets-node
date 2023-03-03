const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");
const socket = io();

socket.on("connect", () => {
  statusServer(lblOnline, lblOffline);
});

socket.on("disconnect", () => {
  statusServer(lblOffline, lblOnline);
});

socket.on("enviar-mensaje", (res) => {
  console.log(res);
})

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    ui: "123abc",
    fecha: new Date().getTime(),
  };
  socket.emit("enviar-mensaje", payload, (id) => {
    console.log('Desde el server', id);
  });
  txtMensaje.value = "";
});

function statusServer(online, offline) {
  offline.classList.add("d-none");
  online.classList.remove("d-none");
}
