const db = require("../firebaseConfig.js");

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
    await sendNotification(mechanicId, userData);

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
    
    await sendNotification(mechanicId, userData);
    res.status(200).json({ message: "Assistance confirmed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
