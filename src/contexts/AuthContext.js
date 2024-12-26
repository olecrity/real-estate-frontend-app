import { jwtDecode } from "jwt-decode";
import {
  Children,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const EMPTY_USER = {
  email: "",
};

const initialState = {
  user: EMPTY_USER,
  token: "",
  isAuth: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    case "logout":
      return { ...initialState };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const { user, token, isAuth } = state;

  async function login(email, password) {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }

    const userData = { user: { email }, token: data.auth_token };

    dispatch({
      type: "login",
      payload: userData,
    });

    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData.user));
    navigate("/appartment/create");
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
    navigate("/login");
  }

  const tokenLogin = useCallback(
    async function () {
      const storageToken = localStorage.getItem("token");
      if (storageToken === undefined || storageToken === null) {
        return;
      }
      try {
        const decoded = jwtDecode(storageToken);
        const nowDate = +(Date.now() / 1000).toFixed(0);
        if (decoded.exp < nowDate) {
          logout();
          return;
        }
        const storageUser = JSON.parse(localStorage.getItem("user"));

        const userData = {
          user: storageUser,
          token: storageToken,
        };
        dispatch({ type: "login", payload: userData });

        setTimeout(() => {
          logout();
        }, (decoded.exp - nowDate) * 1000);
        navigate("/appartment/create");
      } catch (err) {
        console.error(err.message);
      }
    },
    [navigate]
  );

  return (
    <AuthContext.Provider
      value={{ user, token, isAuth, login, logout, tokenLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
