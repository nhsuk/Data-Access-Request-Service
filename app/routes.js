// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

  // Commercial example
  router.post('/why-you-are-applying/commercial', (req, res) => {
    // Make a variable and give it the value from 'know-nhs-number'
    const value = req.session.data['example'];
  
    // Check whether the variable matches a condition
    if (value === 'yes') {
      // Send user to next page
      res.redirect('/why-you-are-applying/commercial-yes');
    } else {
      // Send user to ineligible page
      res.redirect('/why-you-are-applying/outputs');
    }
  });
  

module.exports = router;
