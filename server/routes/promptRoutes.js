const express = require('express')
const router = express.Router()
const Prompt = require('../models/Prompt')
router.post('/', async (req, res) => {
    try {
        const prompt = new Prompt(req.body)
        await prompt.save()
        res.status(201).json(prompt)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.get('/', async (req, res) => {
    try {
        const prompts = await Prompt.find()
        res.json(prompts)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.put('/like/:id', async (req, res) => {
    try {
        const prompt = await Prompt.findById(req.params.id)
        prompt.likes += 1
        await prompt.save()
        res.json(prompt)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        await Prompt.findByIdAndDelete(req.params.id)
        res.json({ message: 'Prompt Deleted Successfully' })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
module.exports = router 
