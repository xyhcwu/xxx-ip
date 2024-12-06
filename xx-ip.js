let addressesapi = [
  'https://raw.githubusercontent.com/enricorath/cf-ip-list/refs/heads/main/cloudflare-ip.txt', // 添加多个 .txt 链接
];

// 定义一个函数来读取所有的 .txt 文件内容
async function fetchTxtContents() {
  try {
    // 使用 Promise.all 并行获取所有 .txt 文件的内容
    const responses = await Promise.all(
      addressesapi.map(url => fetch(url).then(res => res.text()))
    );

    // 将结果存储为一个对象
    const txtContents = addressesapi.reduce((acc, url, index) => {
      acc[url] = responses[index]; // 将链接和对应内容关联
      return acc;
    }, {});

    console.log(txtContents); // 打印所有 .txt 文件的内容
    return txtContents;
  } catch (error) {
    console.error('Error fetching .txt files:', error);
  }
}

// 调用函数
fetchTxtContents();
