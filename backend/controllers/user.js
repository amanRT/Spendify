if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const userSchema = require("./Models/Users");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const initializePassport = require("./passport-config");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());
app.use(flash());

app.use(
  session({
    secret: precoess.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.post("/auth/register", checknotAuthenticated, (req, res) => {
  try {
    const { name, email, password, password_confirm } = req.body;
    if (password !== password_confirm) {
      return res.render("/auth/register", {
        message: "Passwords do not match!",
      });
    } else {
      const hashedPassword = bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      newUser.save().then((res) => console.log(res));
    }

    res.redirect("#");
  } catch {
    res.redirect("/auth/register");
  }
});
app.post(
  "/auth/login",
  checknotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })
);
app.delete("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect('"/auth/login" ');
});

//for checking the user is authenticated or not
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/login");
}
function checknotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}
