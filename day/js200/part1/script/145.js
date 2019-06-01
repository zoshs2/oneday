class NotificationBar {
    constructor(){
        this.barEl = document.createElement('div');
        this.barEl.style.display = "none";
        this.barEl.classList.add("notification-bar")
        document.body.appendChild(this.barEl);
    }
    show(message, position = "top") {
        if(position === "top") {
            this.barEl.style.top = "10px";
            this.barEl.style.bottom = "";
        }
        if(position === "bottom") {
            this.barEl.style.top = "";
            this.barEl.style.bottom = "10px";
        }
        this.barEl.style.left = "10px";
        this.barEl.style.right = "10px";
        this.barEl.style.display = "";
        this.barEl.innerHTML = message;
    }
}
const noti = new NotificationBar();
setTimeout(() => {
    noti.show('welcome to Javascript 200');
}, 1000);

setTimeout(() =>{
    noti.show('welcome to Javascript 200', 'bottom');
}, 2000);