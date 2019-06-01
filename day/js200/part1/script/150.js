function buildAlert(title, message){
    const alert = document.createElement('div');
    const id = Math.ceil(Math.random() * 1000);

    alert.className = 'alert';
    alert.innerHTML = `<span class="close">&times;</span>
                        <h3>${title}</h3>
                        <p>${message}</p>`;
                        alert.id = id;
                        alert.querySelector('span.close')
                        .addEventListener('click', e => {
                          const closeEvt = new CustomEvent('close', {
                            bubbles: true,
                            detail: { id, message }
                          });
                            alert.dispatchEvent(closeEvt);
                            alert.remove();
                        });
                        document.body.prepend(alert);
                        return alert;
}

document.getElementById("order-btn")
.addEventListener('click', e => {
  const alertEl = 
    buildAlert(
      '에러',
      '로그인을 해주세요.'
    );
  alertEl.addEventListener('close', e => {
    console.log(e.detail);
    console.log('error 창을 닫았습니다.');
  })
});