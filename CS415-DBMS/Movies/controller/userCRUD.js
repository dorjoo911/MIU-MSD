exports.getUsers = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "All Users will display in here......",
  });
};

exports.getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `To get User ID=${req.params.id}'s info will display here`,
  });
};

exports.createUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Create a new User",
  });
};

exports.updateUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `User ID=${req.params.id}'s info will be changed`,
  });
};

exports.deleteUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `User ID=${req.params.id}'s info will be deleted`,
  });
};
