
const express = require('express')
const router = express.Router()

const wordCounter = {}

router.get('/sanity', function(req, res){
    res.send('server up and running')
})

router.get('/word/:word', function(req, res){
    const word = req.params.word
    const wordCount = wordCounter[word]
    if(word in wordCounter){
        res.send({count: wordCount})
    }else{
        res.send({count: 0})
    }
})

router.post('/word', function(req, res){
    const myWord = req.body.word
    if(!(myWord in wordCounter)){
        wordCounter[myWord] = 1
    }else{
        wordCounter[myWord]++
    }
    res.send({text: myWord, currentCount: wordCounter[myWord]})
})

router.post('/words/:sentence', function(req, res){
    const sentenceArr = (req.params.sentence).split(' ')
    let numNewWords = 0
    let numOldWords = 0
    sentenceArr.forEach(s => {
        if(s in wordCounter){
            numOldWords ++
        }else{
            wordCounter[s] = 1
            numNewWords ++
        }
    })

    res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

module.exports = router