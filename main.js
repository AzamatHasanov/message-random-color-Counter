function passMessage() {
    const deyer = document.getElementById('messageInput').value
    if (deyer.trim() === "") {
        alert("Please enter a message");
        return
    }

    document.getElementById('messageOutput').textContent = deyer

    document.getElementById('messageInput').value = ""
}