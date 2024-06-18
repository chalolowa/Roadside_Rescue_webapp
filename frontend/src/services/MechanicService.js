import { db } from "../../utils/firebase";
import { haversineDistance } from "../../utils/haversineDistance";
import { collection, getDocs } from "firebase/firestore";

var radius = 50;
export const getMechanicsNearby = async (location, radius) => {
  try {
    const mechanicsCollection = collection(db, "mechanics");
    const mechanicsSnapshot = await getDocs(mechanicsCollection);
    const mechanics = mechanicsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return mechanics.filter((mechanic) => {
      if (mechanic.location) {
        const mechanicCoords = {
          lat: mechanic.location.lat,
          lng: mechanic.location.lng,
        };
        const distance = haversineDistance(location, mechanicCoords);
        return distance <= radius;
      }
      return false;
    });
  } catch (error) {
    throw error;
  }
};

export const getMechanicDetails = async (mechanicId) => {
  try {
    const mechanicDoc = await db.collection("mechanics").doc(mechanicId).get();
    if (mechanicDoc.exists) {
      return { id: mechanicDoc.id, ...mechanicDoc.data() };
    } else {
      throw new Error("Mechanic not found");
    }
  } catch (error) {
    throw error;
  }
};

export const requestAssistance = async (mechanicId, userData) => {
  try {
    await db.collection("requests").add({
      mechanicId,
      ...userData,
      status: "pending",
      createdAt: new Date(),
    });
  } catch (error) {
    throw error;
  }
};
