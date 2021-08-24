let randMessage = [
    'All our dreams can come true, if we have the courage to pursue them.',
    'The secret of getting ahead is getting started.',
    'The secret of getting ahead is getting started.',
    'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.',
    'The best time to plant a tree was 20 years ago. The second best time is now.',
    'If people are doubting how far you can go, go so far that you can’t hear them anymore.',
    'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.',
    'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.',
    'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    'It’s no use going back to yesterday, because I was a different person then.',
    'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.'
]



const motivationalMesage = (arr) => {
    console.log(arr[Math.floor((Math.random()*arr.length))]);
};
motivationalMesage(randMessage);