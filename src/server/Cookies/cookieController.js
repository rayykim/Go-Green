const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie("go green", "green cookie", { httpOnly: true });
  return next();
};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie("ssid", res.locals.cookieId, { httpOnly: true });
  return redirect("/loggedin"); // <- redirect to login
};
module.exports = cookieController;
