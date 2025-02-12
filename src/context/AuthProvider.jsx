import { createContext, useEffect, useState } from "react";
import React from "react";
import { auth } from "../firebase.init";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	

	const [loading, setLoading] = useState(true);
	//login
	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// google login
	const googleProvider = new GoogleAuthProvider();
	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	// createUser
	const createuser = (email, password, name, photoUrl) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// update profile
	const userUpdateProfile = (updateDate) => {
		setLoading(true);
		return updateProfile(auth.currentUser, updateDate);
	};
	// logout
	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};
	// Onstate
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				
				setUser(currentUser);
				setLoading(false);
			} else {
				setUser(null);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const useInfo = {
		user,
		loading,
		createuser,
		setUser,
		logout,
		userUpdateProfile,
		login,
        googleLogin
	};
	return (
		<AuthContext.Provider value={useInfo}>{children}</AuthContext.Provider>
	);
}
