const db = require("../utils/firebaseConfig.js");
const messaging = require('../utils/africasTalkingSMS');

exports.requestAssistance = async (req, res) => {
  const { mechanicId, userData } = req.body;
  try {
    const requestRef = await db.collection("requests").add({
      mechanicId,
      ...userData,
      status: "pending",
      createdAt: new Date(),
    });

    // Send notification to the mechanic
    await messaging.send(mechanicId, userData);

    res.status(201).json({ id: requestRef.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.confirmAssistance = async (req, res) => {
  const { requestId, mechanicId } = req.body;
  try {
    await db.collection("requests").doc(requestId).update({
      status: "confirmed",
    });

    await messaging.send(mechanicId, userData);
    res.status(200).json({ message: "Assistance confirmed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
