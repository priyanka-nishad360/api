const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const port =5000;

// Endpoint for uploading user data
app.post('/upload', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'pan', maxCount: 1 },
  { name: 'address_proof', maxCount: 1 },
  { name: 'salary_slip', maxCount: 6 },
  { name: 'bank_statement', maxCount: 6 },
  { name: 'id_card', maxCount: 1 },
  { name: 'form16', maxCount: 1 },
  { name: 'joining_letter', maxCount: 1 },
  { name: 'resignation_letter', maxCount: 1 },
  { name: 'obligation', maxCount: 1 }
]), (req, res) => {
  // Handle the uploaded files and user data here
  // You can use req.files to access the uploaded files
  // You can use req.body to access any other user data that was sent in the request
  // For example:
  const photo = req.files['photo'][0];
  const pan = req.files['pan'][0];
  const address_proof = req.files['address_proof'][0];
  const salary_slips = req.files['salary_slip'];
  const bank_statements = req.files['bank_statement'];
  const id_card = req.files['id_card'][0];
  const form16 = req.files['form16'][0];
  const joining_letter = req.files['joining_letter'][0];
  const resignation_letter = req.files['resignation_letter'][0];
  const obligation = req.files['obligation'][0];

  // Perform any necessary validation or processing of the uploaded files and user data here

  // Return a response indicating success or failure
  res.send('User data uploaded successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});