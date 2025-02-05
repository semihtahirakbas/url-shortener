const express = require('express');
const router = express.Router();
const ShortURL = require('../model/shorUrlModel');
const shortid = require('shortid');

router.post('/shortenerURL', async (req, res) => {
    const {url} = req.body

    if(!url){
        return res.status(400).json({statu: "Failed", message: "URL's required"})
    }

    try{
        let shortURL = await ShortURL.findOne({originalURL: url}); //schema

        if(!shortURL){
            const shortID = shortid.generate();
            shortURL = new ShortURL({originalURL: url, shortID});
            await shortURL.save()
        }
        console.log("successfully sended!")
        return res.status(200).json({ message: "Success" , 
            data: {
                shortedURL: `${req.protocol}://${req.get('host')}/api/${shortURL.shortID}`
            }});
    }catch (err){
        console.log(err)
        return res.status(500).json({statu: "Failed", message: "Internal Server error"})
    }
    
});

router.get('/:shortId', async (req, res) => {
    try {
        const { shortId } = req.params;
        const shortUrl = await ShortURL.findOne({ shortID: shortId });

        if (!shortUrl) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        res.redirect(shortUrl.originalURL);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;