const admin = require('../firebaseConfig.js');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  await admin
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
