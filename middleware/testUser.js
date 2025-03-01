const { BadRequestError } = require("./../errors");

const testUser = (req, res) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test user. Read Only!");
  }
  next();
};

module.exports = testUser;
