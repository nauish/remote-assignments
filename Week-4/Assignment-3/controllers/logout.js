const logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
    } else {
      res.redirect("/");
    }
  });
};

export default logout;
