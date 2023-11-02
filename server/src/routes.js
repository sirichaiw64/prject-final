const BagController = require('./controllers/BagController')

module.exports = (app) => {

    // create bag
    app.post('/bag',
        BagController.create
    )

    // edit bag
    app.put('/bag/:bagId', BagController.put
    )

    // delete bag
    app.delete('/bag/:bagId',
        BagController.remove
    )

    // get bag by id
    app.get('/bag/:bagId',
        BagController.show
    )

    // get all bags
    app.get('/bags',
        BagController.index
    )
}
