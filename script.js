// 状態変数
let isRunning = false;

// 表示を更新する関数
function updateStatus() {
  const statusElement = document.getElementById('status');
  statusElement.textContent = isRunning ? '稼働中' : '停止中';
  
  if (isRunning) {
    statusElement.classList.remove('stopped');
  } else {
    statusElement.classList.add('stopped');
  }
}

// 初期状態の表示を更新
updateStatus();

// 5秒後にisRunningの状態を変更して表示を更新
setTimeout(() => {
  updateStatus(); // 表示更新
}, 2000);

// ポップアップ表示機能
const viewTextFileButton = document.getElementById('viewTextFileButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const fileContent = document.getElementById('fileContent');

// ボタンを押してポップアップ表示
viewTextFileButton.addEventListener('click', () => {
  fetch('sample.txt')
    .then(response => response.text())
    .then(text => {
      fileContent.textContent = text;
      popup.classList.remove('hidden');
    })
    .catch(error => {
      fileContent.textContent = 'ファイルの読み込みに失敗しました。';
      popup.classList.remove('hidden');
    });
});

// 閉じるボタンでポップアップを閉じる
closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});
