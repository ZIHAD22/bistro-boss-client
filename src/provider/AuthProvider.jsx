import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: {},
    loading: true,
  });

  const createUser = async (email, pass, name) => {
    try {
      setAuthState((pre) => ({
        ...pre,
        loading: true,
      }));
      const result = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(result.user, {
        displayName: name,
      });

      return result.user;
    } catch (error) {
      return error.message;
    }
  };

  const signInUser = async (email, pass) => {
    try {
      setAuthState((pre) => ({
        ...pre,
        loading: true,
      }));
      const { user } = await signInWithEmailAndPassword(auth, email, pass);
      console.log(authState);

      return user;
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    const unLinked = onAuthStateChanged(auth, (currentUser) => {
      setAuthState((pre) => ({
        ...pre,
        user: currentUser,
      }));

      setAuthState((pre) => ({
        ...pre,
        loading: false,
      }));
    });

    return () => {
      unLinked();
    };
  }, [authState.user]);

  const logOutUser = async () => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      return false;
    }
  };

  const authInfo = {
    user: authState.user,
    loading: authState.loading,
    createUser,
    signInUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
