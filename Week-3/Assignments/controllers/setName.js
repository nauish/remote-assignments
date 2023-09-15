const setName = (req, res, next) => {
  try {
    if (req.query.name) {
      res.cookie("name", req.query.name);
      res.redirect("/myName");
    } else {
      res.redirect("/tellMeUrName.html");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = setName;
