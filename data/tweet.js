let tweets = [
    {
        id: '1',
        text: '드림코더분들 화이팅!',
        createAt: Date.now().toString(),
        name: "Bob",
        username: "bob",
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: '2',
        text: '안녕!!',
        createAt: Date.now().toString(),
        name: "Ellie",
        username: "ellie",
    },
];

export async function getAll() {
    return tweets;
}

export async function getAllByUserName(username) {
    return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
    return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text: text,
        createAt: new Date(),
        name: name,
        username: username,
    };

    tweets = [tweet, ...tweets]; // 이 문법은 새로운 배열을 앞에, 기존의 배열을 뒤에 배치하는 방식.
    
    return tweet;
}

export async function update(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id);

    if(tweet) {
        tweet.text = text;
    }

    return tweet;
}

export async function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id);
}