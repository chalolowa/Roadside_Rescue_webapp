import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../../utils/firebase'
import { addDoc, collection } from 'firebase/firestore';

export const register = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, 'users'), {
            fullName,
            email,
            password,
            role,
            phoneNumber,
            idNumber
        });
        return user;
    } catch (error) {
        console.log(error.code, error.message);
        throw error;
    }
}

export const login =  async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.code, error.message);
        throw error;
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error.code, error.message);
        throw error;
    }
}