import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export const register = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid),{
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