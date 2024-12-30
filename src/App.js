import { Navigate, Route, Routes } from "react-router-dom";
import Advertisments from "./pages/Advertisments";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";
import { memo, useEffect } from "react";
import CreateAppartment from "./pages/CreateAppartment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout/AppLayout";
import Appartment from "./pages/Appartment";
import BookmarksPage from "./pages/BookmarksPage";
import { useBookmarks } from "./contexts/BookmarksContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = memo(function App() {
  const { isAuth, tokenLogin } = useAuth();
  const { setBookmarks } = useBookmarks();
  useEffect(
    function () {
      tokenLogin();
    },
    [tokenLogin]
  );

  useEffect(
    function () {
      setBookmarks();
    },
    [setBookmarks]
  );

  return (
    <div className="page-wrapper">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/appartments" replace />} />
            <Route path="appartments" element={<Advertisments />} />
            <Route path="bookmarks" element={<BookmarksPage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
            <Route path="appartment/:appartmentId" element={<Appartment />} />
            {isAuth && (
              <Route path="appartment/create" element={<CreateAppartment />} />
            )}
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
});

export default App;
