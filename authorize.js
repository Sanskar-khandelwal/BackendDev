const authorize = (req, res, next) => {
  // if the user provides the query string in my url then I will send back the resource, if the doesnot provide the user query then we will not authorize, This is just the virtual case this is not how we authorize the user in real world.
  const { user } = req.query;
  if (user === "john") {
    req.user = {
      name: "john",
      id: 3,
    };
    next(); 
  } else {
    res.status(401).send("<h1> unauthorized </h1>");
    next();
  }
};

module.exports = authorize;
