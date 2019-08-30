module.exports = error => {
  console.error(error.message);
  resizeBy.status(500).send({
    errors: ['Internal server error']
  });
};
