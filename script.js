// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Feel At Fome",
        artist: "B Ray",
        album: "Cho Bảo",
        albumArtUrl: "https://i.ytimg.com/vi/6x1yluqMuc4/maxresdefault.jpg",
        audioSrc: "audio/Feel At Home.mp3",
        videoBgSrc: "videos/feelathome.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics:[
  { "time": 0.0,    "text": "Feel at Home • Cho Bảo (title intro)" },
  { "time": 24.54,  "text": "Anh muốn bắt chuyện nhưng không thể ngỏ lời" },
  { "time": 27.21,  "text": "Anh biết vài chuyện mà không thể ngó lơi" },
  { "time": 30.08,  "text": "Nghe nói bến đỗ em cũng đã có nơi" },
  { "time": 32.96,  "text": "Vậy là chuyện mình chỉ tới đó thôi" },
  { "time": 35.42,  "text": "Không thể dối lòng anh thấy mình nhỏ nhoi" },
  { "time": 37.90,  "text": "Không thể níu kéo điều đó thật khó coi" },
  { "time": 40.65,  "text": "Mấy cái trò đó để cho tụi nhỏ chơi" },
  { "time": 43.02,  "text": "Anh chọn rời bỏ trước khi bị bỏ rơi" },
  { "time": 46.58,  "text": "Quá trễ để có thể quay lại" },
  { "time": 48.91,  "text": "Quá nhiều đổ vỡ để có thể xây lại" },
  { "time": 51.76,  "text": "Vừa đủ trưởng thành để ngăn mình ngây dại" },
  { "time": 54.28,  "text": "Nhưng không đủ hận thù để có thể gây hại" },
  { "time": 57.19,  "text": "Truyền hình trực tiếp họ đang quay ai?" },
  { "time": 59.37,  "text": "Ai được ở lại ai bị lãng quên trong nay mai?" },
  { "time": 62.51,  "text": "Ai là phe giặc còn ai là tay sai?" },
  { "time": 64.74,  "text": "Giữa một rừng đầy trái cấm thì ai là cây ngay?" },
  { "time": 68.42,  "text": "Cảnh một màn hai" },
  { "time": 70.12,  "text": "Càng cố giải thích thì bất chợt lại càng sai" },
  { "time": 73.08,  "text": "Now I don't talk about love anymore" },
  { "time": 75.60,  "text": "I done bought girls Birks and Dior" },
  { "time": 78.36,  "text": "Some things just don't work anymore" },
  { "time": 81.05,  "text": "Is some things just don't hurt like before" },
  { "time": 83.76,  "text": "Some things just cannot be ignored" },
  { "time": 86.46,  "text": "Is some things just some things just" },
  { "time": 88.88,  "text": "Look, anh đã quá quen từng ánh nhìn của những người lạ" },
  { "time": 91.82,  "text": "Và anh cũng chẳng lạ cách ứng xử của vài người quen" },
  { "time": 94.72,  "text": "Ngày nay anh sẽ cần nhiều hơn là vài lời khen" },
  { "time": 97.43,  "text": "Đừng nói tình cảm nếu trong đó nó có mùi men" },
  { "time": 100.19, "text": "Damn" },
  { "time": 100.84, "text": "Không biết tên anh từng xuất hiện trong bao nhiêu cuộc hội thoại" },
  { "time": 104.01, "text": "Và không biết bao nhiêu lần anh đã không gọi lại" },
  { "time": 106.82, "text": "Không biết ngày nào đó nếu ta có ngồi lại" },
  { "time": 109.34, "text": "Liệu đôi mắt đó có còn thấy một thằng đồi bại" },
  { "time": 111.99, "text": "Khi nào thì sẽ quá đáng?" },
  { "time": 114.68, "text": "Xây lên chỉ để phá nát?" },
  { "time": 117.46, "text": "Tất cả chỉ là đá cát" },
  { "time": 119.79, "text": "Không trả giá này thì trả giá khác" },
  { "time": 122.54, "text": "Got me out here xưng tội như là cha xứ" },
  { "time": 124.98, "text": "Anh xin được sửa sai không xin được tha thứ" },
  { "time": 127.86, "text": "Em biết là nếu còn cách thì anh cũng đã thử" },
  { "time": 130.56, "text": "Cái giá mà anh phải trả có lẽ là giá như" },
  { "time": 133.53, "text": "Now they wanna talk like they don't need me?" },
  { "time": 136.26, "text": "Now they wanna talk like this shit was easy?" },
  { "time": 138.94, "text": "Now they wanna talk like, like" },
  { "time": 141.60, "text": "Like I don't pop off every time they see me?" },
  { "time": 144.67, "text": "Now you wanna talk like you found a new me?" },
  { "time": 147.48, "text": "And in time you'll see a new me" },
  { "time": 149.91, "text": "We gon' have that talk in time and you'll see" },
  { "time": 152.78, "text": "And you'll see, yeah" },
  { "time": 154.45, "text": "Outro (instrumental or fade-out)" }
]
    },
    {
        id: 2,
        title: "One Of The Girls",
        artist: "The Weeknd",
        album: "The Idol",
        albumArtUrl: "https://i.ytimg.com/vi/f1r0XZLNlGQ/maxresdefault.jpg",
        audioSrc: "audio/The Weeknd.mp3",
        videoBgSrc: "videos/The Weeknd.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
  { "time": 0.0,    "text": "One of Your Girls (title intro)" },
  { "time": 1.22,   "text": "Lock me up and throw away the key" },
  { "time": 3.64,   "text": "He knows how to get the best out of me" },
  { "time": 6.46,   "text": "I'm no fools for the world to see" },
  { "time": 8.88,   "text": "Trade my whole life just to be" },
  { "time": 23.39,  "text": "Tell nobody I control you" },
  { "time": 25.58,  "text": "I broke you just to own you" },
  { "time": 28.42,  "text": "They can't tell that I love you" },
  { "time": 31.92,  "text": "'Cause you're loyal, baby" },
  { "time": 33.99,  "text": "I love when you're submissive" },
  { "time": 36.78,  "text": "Love it when I break skin" },
  { "time": 39.70,  "text": "You feel pain without flinchin'" },
  { "time": 42.60,  "text": "So say it" },
  { "time": 45.06,  "text": "Give me tough love" },
  { "time": 50.43,  "text": "Leave me with nothin' when I come down" },
  { "time": 55.86,  "text": "My kinda love" },
  { "time": 61.32,  "text": "Push me and choke me 'til I pass out" },
  { "time": 67.15,  "text": "We don't gotta be in love, no" },
  { "time": 69.96,  "text": "I don't gotta be the one, no" },
  { "time": 72.58,  "text": "I just wanna be one of your girls tonight" },
  { "time": 78.07,  "text": "We don't gotta be in love, no" },
  { "time": 80.97,  "text": "I don't gotta be the one, no" },
  { "time": 83.77,  "text": "I just wanna be one of your girls tonight, oh" },
  { "time": 102.46, "text": "Push me down, hold me down" },
  { "time": 104.62, "text": "Spit in my mouth while you turn me on" },
  { "time": 108.61, "text": "I wanna take your light inside" },
  { "time": 113.45, "text": "Dim me down, snuff me out" },
  { "time": 115.64, "text": "Hands on my neck while you push it out" },
  { "time": 118.88, "text": "And I'm screamin' out" },
  { "time": 121.75, "text": "Give me tough love" },
  { "time": 127.19, "text": "Leave me with nothin' when I come down" },
  { "time": 132.62, "text": "My kinda love" },
  { "time": 138.18, "text": "Force me and choke me 'til I pass out" },
  { "time": 144.03, "text": "We don't gotta be in love, no" },
  { "time": 146.88, "text": "I don't gotta be the one, no" },
  { "time": 149.35, "text": "I just wanna be one of your girls tonight (tonight)" },
  { "time": 155.14, "text": "We don't gotta be in love, no" },
  { "time": 157.88, "text": "I don't gotta be the one, no (oh)" },
  { "time": 160.37, "text": "I just wanna be one of your girls tonight, oh" },
  { "time": 168.55, "text": "Lock me up and throw away the key" },
  { "time": 170.76, "text": "He knows how to get the best out of me" },
  { "time": 173.56, "text": "I'm no fools for the world to see" },
  { "time": 175.95, "text": "Trade my whole life just to be" },
  { "time": 179.16, "text": "Top of the world but I'm still not free" },
  { "time": 181.62, "text": "It's such a secret that I keep" },
  { "time": 184.39, "text": "Until it's gone, I can never find peace" },
  { "time": 187.03, "text": "Brace my whole life just to be" },
  { "time": 193.95, "text": "We don't gotta be in love, no" },
  { "time": 196.04, "text": "I don't gotta be the one, no" },
  { "time": 198.78, "text": "I just wanna be one of your girls tonight (tonight)" },
  { "time": 204.03, "text": "We don't gotta be in love, no" },
  { "time": 207.12, "text": "I don't gotta be the one, no (oh)" },
  { "time": 209.84, "text": "I just wanna be one of your girls tonight, oh (oh)" },
  { "time": 215.10, "text": "Outro (instrumental or fade-out)" }
]
    },    
    {
        id: 3,
        title: "Tán Gái 505",
        artist: "Low G",
        album: "Rap Nhà Làm",
        albumArtUrl: "https://i.ytimg.com/vi/P2bTHVaa25w/maxresdefault.jpg",
        audioSrc: "audio/Tán Gái 505.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
  { "time": 0.0,    "text": "Lowkey (title intro)" },
  { "time": 25.45,  "text": "Không cần tím nên anh cũng không cần Sprite (yuh yah)" },
  { "time": 28.53,  "text": "Bảo em thứ hai cầm Lucky Strike là đủ (ay)" },
  { "time": 31.81,  "text": "Lowkey ngày thường anh rủ em overnight (overnight)" },
  { "time": 35.15,  "text": "Budweiser bao giờ hết chai thì ngủ" },
  { "time": 37.31,  "text": "Anh gọi cho em xong rồi mình quên đi, quên đi" },
  { "time": 40.68,  "text": "Bỏ mascara cho em ở trên mi, trên mi" },
  { "time": 43.91,  "text": "Nên f- những thứ mà làm em thêm suy, thêm suy" },
  { "time": 47.16,  "text": "Để cho người không cần thiết thì nên đi, nên đi" },
  { "time": 50.48,  "text": "'Cause I don't give a shit and" },
  { "time": 53.69,  "text": "Nói cho anh nghe baby" },
  { "time": 56.58,  "text": "Chuyện mà em muốn nói" },
  { "time": 60.01,  "text": "I know you got crazy" },
  { "time": 63.23,  "text": "Mỗi lần nghe tên mình được gọi" },
  { "time": 66.51,  "text": "Nói thầm em vào tai (ay)" },
  { "time": 68.22,  "text": "Nhìn vào mắt em cười lúc em đang có chuyện kể lại" },
  { "time": 70.98,  "text": "Hai giờ sáng em cầm điếu thuốc và Nike Air nó vẫn còn trắng" },
  { "time": 74.21,  "text": "Đan hai chân vào nhau thật chặt khi em thu mình dưới ánh trăng" },
  { "time": 77.56,  "text": "I'll be lowkey life foreva boy, nghe người ta bảo vậy" },
  { "time": 80.56,  "text": "Họ gọi anh là lowkey genius boy, nên phải tính sao đây khi mà" },
  { "time": 84.36,  "text": "Không cần mặn mà nến và hoa, không cần gặp là đến vào bar" },
  { "time": 87.65,  "text": "Không cần đặt cả tên hào hoa khi Jordan đế giày anh còn phá (ay ay ay)" },
  { "time": 92.58,  "text": "Rong biến mua ở Circle K (ay)" },
  { "time": 95.73,  "text": "Để dành cho em vào buổi tối (yuh)" },
  { "time": 98.92,  "text": "White Surpreme và Cartier (chất chất)" },
  { "time": 102.03, "text": "Vì em phố từ vắng thành chật trội" },
  { "time": 104.28, "text": "Rollin rollin, em đặt giấy nâu lên môi" },
  { "time": 106.73, "text": "Girl you ballin ballin, đế phần thừa cháy xong thổi" },
  { "time": 109.90, "text": "All black in Nirvana, em nhìn anh đắm đuối" },
  { "time": 113.32, "text": "Khi môi em không bao giờ nguội" },
  { "time": 114.93, "text": "Anh vẫn không cần, không cần, không cần" },
  { "time": 116.59, "text": "Không cần tím nên anh cũng không cần Sprite (không cần Sprite)" },
  { "time": 119.57, "text": "Bảo em thứ hai cầm Lucky Strike là đủ (yuh yah)" },
  { "time": 122.75, "text": "Lowkey ngày thường anh rủ em overnight (overnight)" },
  { "time": 126.40, "text": "Budweiser bao giờ hết chai thì ngủ" },
  { "time": 128.53, "text": "Anh gọi cho em xong rồi mình quên đi, quên đi" },
  { "time": 131.87, "text": "Bỏ mascara cho em ở trên mi, trên mi" },
  { "time": 134.86, "text": "Nên f- những thứ mà làm em thêm suy, thêm suy" },
  { "time": 138.35, "text": "Để cho người không cần thiết thì nên đi, nên đi" },
  { "time": 141.63, "text": "'Cause I don't give a shit and" },
  { "time": 143.85, "text": "Outro (instrumental or fade-out)" }
]
    },
    {
        id: 4,
        title: "Sài Gòn ơi",
        artist: "Obito Official",
        album: "Đánh Đổi",
        albumArtUrl: "https://i.ytimg.com/vi/qBsiWmEdj0c/maxresdefault.jpg",
        audioSrc: "audio/Sài Gòn ơi.mp3",
        videoBgSrc: "videos/Sài Gòn ơi.mp4",
        lyrics:[
  { "time": 0.0,    "text": "Sài Gòn Ơi (title intro)" },
  { "time": 17.32,  "text": "Huh, Sài Gòn ơi, huh, Sài Gòn ơi" },
  { "time": 21.02,  "text": "Sao em lại đối với anh như này? (Huh-uh-uh-uhh)" },
  { "time": 26.00,  "text": "Huh, Sài Gòn ơi, huh, Sài Gòn ơi" },
  { "time": 30.29,  "text": "Sao em lại đối với anh?" },
  { "time": 34.46,  "text": "Tim anh nóng lòng gặp nàng, để cảm xúc lên từng nhịp" },
  { "time": 38.66,  "text": "Nơi quá khứ anh không vui, hạnh phúc mắt anh không nhìn kịp" },
  { "time": 43.24,  "text": "Anh pack hết đồ, nhìn thật lâu bồi hồi trên chuyến xe trong đêm" },
  { "time": 47.41,  "text": "Mắt sáng như sao, vì được nghe thật nhiều điều vui khi bên em" },
  { "time": 52.47,  "text": "Trò chơi em thích đánh đố phố sáng khi em lên đồ" },
  { "time": 56.71,  "text": "Vì tương lai nên anh cũng cố dù em khiến anh đôi khi hơi rồ" },
  { "time": 60.72,  "text": "Và giá như, giá như, giá như" },
  { "time": 69.54,  "text": "Và giá như, giá như, giá như, giá như anh hiểu được em" },
  { "time": 79.34,  "text": "Huh, Sài Gòn ơi, huh, Sài Gòn ơi" },
  { "time": 82.61,  "text": "Sao em lại đối với anh như này? (Sao? Sao? Sao?)" },
  { "time": 88.05,  "text": "Huh, Sài Gòn ơi, huh, Sài Gòn ơi" },
  { "time": 91.58,  "text": "Sao em lại đối với anh như này?" },
  { "time": 96.93,  "text": "Tưởng chừng như dài lâu, như dài lâu, như dài lâu" },
  { "time": 101.26, "text": "Tưởng như yêu đậm sâu, yêu đậm sâu, yêu đậm sâu" },
  { "time": 105.65, "text": "Tưởng như ta hợp nhau, ta hợp nhau" },
  { "time": 109.09, "text": "Giờ còn chẳng nói với nhau một câu (oh-woah)" },
  { "time": 113.52, "text": "Em dắt anh đi gặp nhiều người" },
  { "time": 116.27, "text": "Dù họ không tốt với anh họ khiến anh rơi giữa dòng đời" },
  { "time": 120.78, "text": "Màn đêm đang kéo tới nhanh và rồi em đâu, tình mình thêm đau" },
  { "time": 126.95, "text": "Tại sao em nỡ vô tâm để vỡ trái tim người yêu em nhiều nhất?" },
  { "time": 131.66, "text": "Ooh, oh baby à, baby" },
  { "time": 135.11, "text": "Rồi người ta cũng sẽ bỏ em đi khi mọi thứ đã đủ đầy" },
  { "time": 139.27, "text": "Chỉ mình em với những khoảng không cô đơn ừ thì anh vẫn thương em" },
  { "time": 143.83, "text": "Nhưng làm sao để quay về, ngày tình mình như hôm nào" },
  { "time": 149.20, "text": "Ohh-ooh-oh-oh, oh-oh" },
  { "time": 153.58, "text": "Ohh-ooh-oh-oh, oh-oh" },
  { "time": 157.95, "text": "Ohh-ooh, ooh-oh, ooh-oh" },
  { "time": 162.13, "text": "Ohh, giá như anh hiểu được em" },
  { "time": 168.90, "text": "Outro (instrumental or fade-out)" }
]
    },
    {
        id: 5,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra", 
        album: "Unreleased",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "audio/Somebodys Pleasure.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 1000, text: "I've been too busy ignoring and hiding" },
            { time: 1000, text: "About what my heart actually say" },
            { time: 1000, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 1000, text: "Sometimes a happiness is just a happiness" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" }, 
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I always pretending and lying" },
            { time: 1000, text: "I got used to feel empty" },
            { time: 1000, text: "'Cause all I got is unhappy" },
            { time: 1000, text: "Happiness, can't I get happiness?" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "And I don't even feel my own pain" },
            { time: 1000, text: "Whatever when the storms pouring rain" },
            { time: 1000, text: "Feels like a wind" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I hold imagination" },
            { time: 1000, text: "Cover all of the sadness" },
            { time: 1000, text: "I don't feel something special" },
            { time: 1000, text: "Turn off the phone to get some spatial" },
            { time: 1000, text: "Never thought I'd living in true" },
            { time: 1000, text: "The truth that has been so blue" },
            { time: 1000, text: "It was in a blink of an eye" },
            { time: 1000, text: "Find a way how to say goodbye" },
            { time: 1000, text: "I've got to take me away from all sadness" },
            { time: 1000, text: "Stitch all my wounds, confess all the sins" },
            { time: 1000, text: "And took all my insecurities" },
            { time: 1000, text: "When will I got the love that is so pure?" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 1000, text: "Gotta have, gotta have to always make sure" },
            { time: 1000, text: "I'm not just somebody's pleasure" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
  { "time": 0.0,    "text": "I Wanna Be Yours (title intro)" },
  { "time": 18.09,  "text": "I wanna be your vacuum cleaner" },
  { "time": 21.85,  "text": "Breathing in your dust" },
  { "time": 25.02,  "text": "I wanna be your Ford Cortina" },
  { "time": 28.72,  "text": "I will never rust" },
  { "time": 32.45,  "text": "If you like your coffee hot" },
  { "time": 36.08,  "text": "Let me be your coffee pot" },
  { "time": 39.44,  "text": "You call the shots, babe" },
  { "time": 42.38,  "text": "I just wanna be yours" },
  { "time": 46.04,  "text": "Secrets I have held in my heart" },
  { "time": 49.74,  "text": "Are harder to hide than I thought" },
  { "time": 53.39,  "text": "Maybe I just wanna be yours" },
  { "time": 56.79,  "text": "I wanna be yours" },
  { "time": 58.65,  "text": "I wanna be yours" },
  { "time": 62.04,  "text": "Wanna be yours" },
  { "time": 65.91,  "text": "Wanna be yours" },
  { "time": 69.43,  "text": "Wanna be yours" },
  { "time": 74.86,  "text": "Let me be your 'leccy meter" },
  { "time": 78.35,  "text": "And I'll never run out" },
  { "time": 81.55,  "text": "Let me be the portable heater" },
  { "time": 85.40,  "text": "That you'll get cold without" },
  { "time": 88.96,  "text": "I wanna be your setting lotion" },
  { "time": 92.70,  "text": "Hold your hair in deep devotion (I'll be)" },
  { "time": 96.29,  "text": "At least as deep as the Pacific Ocean" },
  { "time": 99.46,  "text": "Now I wanna be yours" },
  { "time": 102.98, "text": "Secrets I have held in my heart" },
  { "time": 106.67, "text": "Are harder to hide than I thought" },
  { "time": 110.32, "text": "Maybe I just wanna be yours" },
  { "time": 113.62, "text": "I wanna be yours" },
  { "time": 115.57, "text": "I wanna be yours" },
  { "time": 119.26, "text": "Wanna be yours" },
  { "time": 122.54, "text": "Wanna be yours" },
  { "time": 126.16, "text": "Wanna be yours" },
  { "time": 129.71, "text": "Wanna be yours" },
  { "time": 133.36, "text": "Wanna be yours" },
  { "time": 136.78, "text": "Wanna be yours" },
  { "time": 140.36, "text": "Wanna be yours" },
  { "time": 144.15, "text": "Wanna be yours" },
  { "time": 146.23, "text": "I wanna be your vacuum cleaner (Wanna be yours)" },
  { "time": 149.84, "text": "Breathing in your dust (Wanna be yours)" },
  { "time": 152.90, "text": "I wanna be your Ford Cortina (Wanna be yours)" },
  { "time": 156.88, "text": "I will never rust (Wanna be yours)" },
  { "time": 159.64, "text": "I just wanna be yours (Wanna be yours)" },
  { "time": 162.99, "text": "I just wanna be yours (Wanna be yours)" },
  { "time": 166.63, "text": "I just wanna be yours (Wanna be yours)" },
  { "time": 171.28, "text": "Outro (instrumental or fade-out)" }
]
    },
 {
        id: 7,
        title: "hãy cho con chịu đau khổ thay em",
        artist: "Lil Liem",
        album: "LeTrongNguyenReal",
        albumArtUrl: "https://i.ytimg.com/vi/7bZtpPVeA2g/maxresdefault.jpg",
        audioSrc: "audio/Lil liem .mp3",
        videoBgSrc: "videos/Lil liem.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
  { "time": 0.0,    "text": "Chia Tay (title intro)" },
  { "time": 2.38,   "text": "Hmm, anh nói anh yêu em á?" },
  { "time": 6.48,   "text": "Thôi, không đáng đâu!" },
  { "time": 8.70,   "text": "Mình chia tay rồi mà?" },
  { "time": 11.00,  "text": "Anh phải hiểu ý em chứ, uh-hmm" },
  { "time": 15.46,  "text": "Đừng có bi lụy như thế (YoungSapphire on the beat)" },
  { "time": 18.83,  "text": "Em mong sau này anh sẽ sống hạnh phúc" },
  { "time": 21.76,  "text": "Đừng vì em mà bỏ lỡ bất cứ tình cảm nào mà anh xứng đáng có" },
  { "time": 26.12,  "text": "Sống vì anh đi, coi như em xin anh đấy" },
  { "time": 31.65,  "text": "Em thương anh nhất mà" },
  { "time": 32.65,  "text": "Anh ước cơn mơ của anh sẽ thấy em, thấy đôi mi anh lấm lem" },
  { "time": 36.48,  "text": "Dù biết cơn đau sẽ khó quên, anh để tên em trong lãng quên" },
  { "time": 40.07,  "text": "Anh biết tất cả mọi thứ thật là trơ trọi" },
  { "time": 42.16,  "text": "Cô độc trong đêm tối" },
  { "time": 44.07,  "text": "Em đi, em không nói" },
  { "time": 45.96,  "text": "Tim của anh đau nhói" },
  { "time": 47.62,  "text": "Chìm sâu vào trong đôi mắt (Hah)" },
  { "time": 51.31,  "text": "Anh thấy mình có nút thắt (Hah)" },
  { "time": 55.15,  "text": "Vì em chẳng giống như xưa (Hah)" },
  { "time": 58.74,  "text": "Chạy theo em dưới cơn mưa" },
  { "time": 61.28,  "text": "Uoh-wah-ah" },
  { "time": 62.55,  "text": "Chìm sâu vào trong đôi mắt (Trả lại giọt nước mắt)" },
  { "time": 66.09,  "text": "Anh thấy mình có nút thắt (Đâu còn đôi tay nắm)" },
  { "time": 69.83,  "text": "Vì em chẳng giống như xưa (Vì em chẳng giống như xưa)" },
  { "time": 73.68,  "text": "Chạy theo em dưới cơn mưa (Chạy theo em những cơn mưa)" },
  { "time": 76.53,  "text": "Uoh-wah-ah" },
  { "time": 77.48,  "text": "Trả lại giọt nước mắt (Trả lại giọt nước mắt)" },
  { "time": 81.25,  "text": "Đâu còn đôi tay nắm (Đâu còn đôi tay nắm)" },
  { "time": 84.73,  "text": "Vì em chẳng giống như xưa (Vì em chẳng giống như xưa)" },
  { "time": 88.57,  "text": "Chạy theo em những cơn mưa (Chạy theo em dưới cơn mưa)" },
  { "time": 93.37,  "text": "Huh-uh, Huh-uh-huh, huh-uh-huh-uh-huh-uh-huh" },
  { "time": 99.85,  "text": "Nước mắt anh cứ rơi" },
  { "time": 103.26, "text": "Cảm xúc ấy không dễ trôi (Trôi theo)" },
  { "time": 107.26, "text": "Như mãi phút ban đầu" },
  { "time": 109.15, "text": "Có nghe thấy anh không" },
  { "time": 111.06, "text": "Hứa rồi sẽ trở về" },
  { "time": 112.62, "text": "Sao anh thấy não nề" },
  { "time": 114.59, "text": "Vết thương ấy thêm sâu" },
  { "time": 116.23, "text": "Mọi thứ kia rất đau đầu" },
  { "time": 118.35, "text": "Muốn một chút thêm màu" },
  { "time": 120.04, "text": "Vì em anh sẽ ra đi" },
  { "time": 121.38, "text": "Cho anh là ngọn gió" },
  { "time": 124.43, "text": "Đến nắm đôi tay em rời đi (Em rời đi)" },
  { "time": 128.22, "text": "Dù biết yêu thương sẽ bỏ đi (Sẽ bỏ đi)" },
  { "time": 132.04, "text": "Còn tiếng yêu em sẽ thế nào (Sẽ thế nào)" },
  { "time": 135.50, "text": "Anh sẽ quên (Anh sẽ quên)" },
  { "time": 137.28, "text": "(Anh sẽ quên)" },
  { "time": 137.97, "text": "Đau đầu, khi mà, anh mơ, qua dòng tin nhắn" },
  { "time": 141.62, "text": "Baby, em sẽ đi vào, vào một không gian khác" },
  { "time": 145.44, "text": "Nếu được, xin hãy, trở về, về lại em ơi" },
  { "time": 149.02, "text": "Chấp nhận, nếu được yêu bằng, tình yêu mù quáng" },
  { "time": 152.42, "text": "Outro (instrumental or fade-out)" }
]
    },
];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();