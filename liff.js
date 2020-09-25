function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            initializeApp();
        })
        .catch((err) => {
            alert('啟動失敗。');
        });
}

function initializeApp() {
    var h = document.getElementById('result');
    h.innerHTML = 'Hello!!';
}

//使用 LIFF_ID 初始化 LIFF 應用
initializeLiff('1654981891-k2NAqmL5');