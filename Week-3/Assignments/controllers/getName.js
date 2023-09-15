const getName = (req, res, next) => {
  try {
    const storedTrackName = req.cookies.name;
    if (!storedTrackName) {
      res.redirect("/tellMeUrName.html");
    } else {
      res.send(`Hello, ${storedTrackName}`);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getName;
