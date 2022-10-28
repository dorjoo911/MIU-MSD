exports.getCategories = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "All categories will display in here......",
  });
};

exports.getCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `To get category ID=${req.params.id}'s info will display here`,
  });
};

exports.createCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Create a new category",
  });
};

exports.updateCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Category ID=${req.params.id}'s info will be changed`,
  });
};

exports.deleteCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Categoty ID=${req.params.id}'s info will be deleted`,
  });
};
