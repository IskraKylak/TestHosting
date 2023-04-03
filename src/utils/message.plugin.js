const message = {
  install (app) {
    app.config.globalProperties.$message = (html) => {
      const messageDiv = document.createElement('div');
        messageDiv.setAttribute('id', 'message');
        messageDiv.innerText = html;
        document.body.appendChild(messageDiv);
      setTimeout(function() {
        document.body.removeChild(messageDiv);
      }, 3000)
    }
    app.provide('$message', app.config.globalProperties.$message)
  }
}

export default message;
