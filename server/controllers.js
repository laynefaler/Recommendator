// call model functions in controller functions
const models = require('./models')

module.exports = {
    // Josh's endpoint is user
  auth: {
    get: (req, res) => {
      models.auth.get()
            .then(data => {
              res.send()
            })
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  favorites: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  comments: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  hotspots: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
      models.hotspots.post(req.body)
      res.send(req.body)
    }
  },
  yelp: {
    get: (req, res) => {
           
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  maps: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {

    }
  }

}
