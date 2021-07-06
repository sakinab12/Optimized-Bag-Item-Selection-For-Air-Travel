const router = require('express').Router({mergeParams: true});
const knapsack = require('../controller/knapsack')

router.post('/optimumBag', knapsack);

module.exports= router;