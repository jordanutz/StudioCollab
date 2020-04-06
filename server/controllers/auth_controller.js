const bcrypt = require('bcryptjs')

module.exports = {

  userRegister: async (req, res) => {
    const db = req.app.get('db')
    const {name, email, password, account} = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const findExistingEmail = await db.auth.check_if_exists([email])

    if (findExistingEmail[0]) {
       // Return error if user is found in database. 
      res.status(400).send('Email is already in use.')
    } else {
      try {
         // If user is not found by email, register new user in database. 
        let newUser = await db.auth.user_register([name, email, hash, account])

        newUser = {
          id: newUser[0].id, 
          name: newUser[0].name,
          email: newUser[0].email, 
          account: newUser[0].account
        }

        // Assign new user to session storage. 
        req.session.user = newUser 
        return res.status(200).send(req.session.user)
      } catch (err) {
        console.log(err)
        return res.status(400).send('Account could not be created')
      }
    }
  }, 
  userLogin: async (req, res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
    const findExistingUser = await db.auth.user_login([email])

    if (!findExistingUser[0]) {
       // Return error if email used is not associated with a user. 
      return res.status(401).send('User does not exist with this email')
    } 

    const authedUser = bcrypt.compareSync(password, findExistingUser[0].password)

    try {
      if (authedUser) {

        req.session.user = [
          { 
            id: findExistingUser[0].id, 
            name: findExistingUser[0].name, 
            email: findExistingUser[0].email, 
            account: findExistingUser[0].account
          }
        ]
        
        return res.status(200).send(req.session.user)
      } else {
        return res.status(401).send('Incorrect email or password')
      }
    }

    catch (err) {
      console.log(err)
    }
   }, 
  getUser: (req, res) => {
    console.log(req.session.user, 'get user')
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } 
  }, 
  userLogout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }
}