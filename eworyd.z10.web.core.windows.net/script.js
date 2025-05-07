document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作（リロード）を防ぐ
    const number = document.getElementById('numberInput').value;
    const url = `https://eworyd.z10.web.core.windows.net/merrx01usahtml/?bcda=${number}`;
    window.location.href = url; // URLに遷移する
});
