import * as tweetRepository from '../data/tweet.js';

export async function getTweets(request, response) {
    const username = request.query.username;
    const data = await (username 
        ? tweetRepository.getAllByUserName(username)
        : tweetRepository.getAll()); // 여기는 이거 자체가 promise니까,,
    response.status(200).json(data);
}

export async function getTweet(request, response) {
    const id = request.params.id;
    const tweet = await tweetRepository.getById(id);
    if(tweet) {
        response.sendStatus(200).json(tweet);
    } else {
        response.status(404).json({message: `Tweet id(${id}) not found`});
    }
}

export async function createTweet(request, response) {
    const {text, name, username} = request.body;
    const tweet = await tweetRepository.create(text, name, username);
    response.status(201).json(tweet);
}

export async function updateTweet(request, response) {
    const id = request.params.id;
    const text = request.body.text;
    const tweet = await tweetRepository.update(id, text);
    if(tweet) {
        response.status(200).json(tweet);
    } else {
        response.status(404).json({message: `Tweet id(${id}) not found`});
    }
}

export async function deleteTweet(request, response) {
    const id = request.params.id;
    await tweetRepository.remove(id);
    response.send(204);
}