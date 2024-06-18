import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../../utils/firebase'
import { useNavigate } from 'react-router-dom';

export const register = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await db.collection('users').doc(user.uid).set({
            fullName,
            email,
            password,
            role,
            phoneNumber,
            idNumber
        });
        useNavigate('/Dashboard');
    } catch (error) {
        console.log(error.code, error.message);
        throw error;
    }
}

export const login =  async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        useNavigate('/Dashboard');
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