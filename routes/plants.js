const router = require('express').Router();
const Plant = require('../models/plant');


// Find All
router.get('/', (req, res) => {
  Plant.findAll()
    .then((plants) => {
      if (!plants.length) return res.status(404).send({ err: 'Plant not found' });
      res.send(`find successful: ${plants}`);
    })
    .catch(err => res.status(500).send(err));
});

// Get Create Page
router.get('/createPlant', function(req, res) {
  res.render('createPlant', {title: 'Creating Plant Database'});
});

// Find One by plantid
router.get('/plantid/:plantid', (req, res) => {
  Plant.findOneByPlantid(req.params.plantid)
    .then((plant) => {
      if (!plant) return res.status(404).send({ err: 'Plant not found' });
      res.send(`findOne successful: ${plant}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new plant database
router.post('/', (req, res) => {
  console.log('Creating request posted to homepage!');
  
  Plant.create(req.body)
    .then(plant => res.send(plant))
    .catch(err => res.status(500).send(err));
    
});

// Update by palntid
router.put('/plantid/:plantid', (req, res) => {
  Plant.updateByPlantid(req.params.plantid, req.body)
    .then(plant => res.send(plant))
    .catch(err => res.status(500).send(err));
});

// Delete by plantid
router.delete('/plantid/:plantid', (req, res) => {
  Plant.deleteByPlantid(req.params.plantid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;