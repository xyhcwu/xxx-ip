fetch('https://raw.githubusercontent.com/enricorath/cf-ip-list/refs/heads/main/cloudflare-ip.txt')
  .then(response => response.text())
  .then(data => {
    console.log(data); // 将.txt内容输出到控制台
  });
