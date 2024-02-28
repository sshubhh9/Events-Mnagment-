const con = require('./connection');
const port = 2020;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set your destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.send("hello world gujarat!");
});

app.post('/profile', upload.single('file'), (req, res) => {
  const data = {
    // Define the properties for the 'profile' table
    // Ensure you have the necessary data to insert into the 'profile' table
    // For example: name, email, etc.
  };

  con.query('INSERT INTO profile SET ?', data, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({
        success: 0,
        message: "Error in database query",
      });
    } else {
      return res.json({
        success: 1,
        message: "Successfully inserted into profile table",
        details: result,
        image: `http://localhost:2020/profile/${req.file.filename}`,
        pic: `http://localhost:2020/pic/${req.file.filename}`
      });
    }
  });
});

app.post('/login', (req, res) => {
  con.query('SELECT * FROM register WHERE email = ?', req.body.email, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({
        success: 0,
        message: "Error in database query",
      });
    }

    if (result && result.length > 0) {
      // Use a secure method like bcrypt for password comparison
      if (req.body.password == result[0].password) {
        return res.json({
          success: 1,
          message: "Login successful",
          result,
        });
      } else {
        return res.json({
          success: 0,
          message: "Password is incorrect",
        });
      }
    } else {
      return res.json({
        success: 0,
        message: "Email does not exist",
      });
    }
  });
});

app.post('/register', (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    phno: req.body.phno,
    password: req.body.password,
    cpassword: req.body.cpassword,
  };

  if (req.body.name &&
    req.body.email &&
    req.body.gender &&
    req.body.phno &&
    req.body.password &&
    req.body.cpassword) {
    if (req.body.password === req.body.cpassword) {
      con.query("SELECT * FROM register WHERE email = ?", req.body.email, (err, result) => {
        if (err) {
          console.log(err);
          return res.json({
            success: 0,
            message: "Error in database query",
          });
        } else {
          if (result && result.length > 0) {
            return res.json({
              success: 0,
              message: "Email id already exists",
            });
          } else {
            con.query("INSERT INTO register SET ?", data, (err, result) => {
              if (err) {
                console.log(err);
                return res.json({
                  success: 0,
                  message: "Error in registration",
                });
              } else {
                return res.json({
                  success: 1,
                  message: "Your registration is successful",
                  details: result,
                });
              }
            });
          }
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Please enter the same password in cpassword",
      });
    }
  } else {
    return res.json({
      success: 0,
      message: "Please enter all required fields",
    });
  }
});

app.get("/Allusers", (req, res) => {
  con.query('SELECT * FROM register', (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Server Error",
      });
    } else {
      return res.json({
        success: 1,
        message: "Users retrieved successfully",
        users: result,
      });
    }
  });
});

app.patch('/update/:id', (req, res) => {
  const id = req.params.id;
  const data = [req.body.name, req.body.email, req.body.phno, req.body.gender, id];
  con.query("UPDATE register SET name =? ,email =? ,phno =?, gender =? WHERE ID =?", data, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({
        success: 0,
        message: "Error in database query",
      });
    } else {
      return res.json({
        success: 1,
        message: 'User details updated successfully',
      });
    }
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  con.query('DELETE FROM register WHERE id = ? ', id, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({
        success: 0,
        message: "Error in database query",
      });
    } else {
      return res.json({
        success: 1,
        message: "User deleted successfully.",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
