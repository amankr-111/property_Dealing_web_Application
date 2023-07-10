const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


require('../DB/conn')
const User = require('../model/userSchema');
const Sell = require('../model/sellDetails');
const Contact = require('../model/contactSchema');


router.get('/', (req, res) => {
    res.send("hello world");
});


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ error: "Please enter valid details" });
    }

    try{
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "User already exists" });
        }
        const user = new User({ name, email, password });
        
        await user.save();
        
            res.status(201).json({ message: "Registered successfully" });

    }catch (err){
        console.log(err)
    }
})

router.post('/login', async (req, res) => {
    try {
      let token;
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Please fill the data' });
      }
  
      const userLogin = await User.findOne({ email: email });
      if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
  
        if (!userLogin) {
          res.status(400).json({ error: 'Invalid credentials' });
        } else {
          res.status(200).json({ message: 'Login successful' });
        }
      } else {
        res.status(400).json({ error: 'Invalid credentials' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

router.post('/sell', async (req, res) => {
    const { name, city , locality, state } = req.body;

    if (!name || !city || !locality || !state) {
        return res.status(422).json({ error: "Please enter valid details" });
    }

    try{
        const sell = new Sell({ name, state , city, locality });
        
        await sell.save();
        
            res.status(201).json({ message: "your data has been saved to our DataBase" });

    }catch (err){
        console.log(err)
    }
})
router.post('/details', async (req, res) => {
    const { name, email , contact, date } = req.body;

    if (!name || !email || !contact|| !date) {
        return res.status(422).json({ error: "Please enter valid details" });
    }

    try{
        const details = new Contact({ name, email , contact, date });
        
        await details.save();
        
            res.status(201).json({ message: "your data has been saved to our DataBase" });

    }catch (err){
        console.log(err)
    }
})


module.exports = router;
