const quotes = [
    "十分方便！一键生成旅行相册视频，真是太方便了。",
    "独特的旅行回忆！MapTok以独特而酷炫的方式展示了我的旅行打卡照片。",
    "地图定位很准确！MapTok能够准确获取照片的拍摄位置信息，而且我还可以手动添加位置信息。这使得我的旅行相册视频更加完美。",
    "与朋友分享的好工具！我可以轻松地将我的旅行相册视频分享给亲朋好友，让他们也能一窥我旅行的精彩时刻。",
    "制作过程简单快捷！这个应用的界面非常友好，制作旅行相册视频只需要几步，即使是不懂技术的人也能轻松上手。",
    "旅行日记的完美补充！我以前总是写旅行日记，但现在有了MapTok，我可以用照片和视频更生动地记录我的旅程。",
    "强烈推荐！如果你喜欢旅行并想要以特别的方式展示你的回忆，MapTok是一个不可或缺的应用。简直是旅行爱好者的福音！",
    "当我用这个应用的时候，真的感觉太酷了！一键生成旅行相册视频，简直是太方便太赞了！不用再费劲编辑照片，它会自己根据位置排好，感觉就像是我的私人导游一样带我回忆美好瞬间！",
    "MapTok的设计简直是炸裂，用超酷的方式展示我的旅行打卡照片，朋友们都被我的旅行相册视频惊艳到了！完全不是那种老土的相册，简直时尚又有格调！",
    "地图定位超准确，连我拍照的地点都能准确捕捉，而且我还可以自己手动添加地点，真是贴心极了！我的旅行相册视频一点都不马虎！",
    "分享给朋友们的时候，他们都超级惊喜！大家都太爱这个应用了，觉得我好有品味！哈哈哈！",
    "用起来简直是太简单了，几步搞定，完全不需要懂技术！就算是技白也能秒变高手！",
    "我的旅行打卡回忆终于可以永久保存啦！不再担心会慢慢遗忘，感觉每次旅行都像是昨天发生的事情！",
    "每次看我的旅行相册视频都有新的发现，简直是惊喜不断！感觉就像是每一帧都有故事！",
    "强烈推荐啊！如果你也是个热爱旅行的小伙伴，一定要试试MapTok！简直是旅行神器，不用再担心旅行回忆被遗忘啦！太酷了！",
    // 添加其他评价...
];

const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
});
