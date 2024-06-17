const db = require('../firebaseConfig.js');

exports.getMechanics = async (req, res) => {
  try {
    const mechanicsSnapshot = await db.collection("mechanics").get();
    const mechanics = mechanicsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(mechanics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMechanicDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const mechanicDoc = await db.collection("mechanics").doc(id).get();
    if (mechanicDoc.exists) {
      res.status(200).json({ id: mechanicDoc.id, ...mechanicDoc.data() });
      res.json(mechanicDoc.data())
    } else {
      res.status(404).json({ error: "Mechanic not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
