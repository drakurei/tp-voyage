import Router from "./router/Router";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        {/* Les favoris dépendent de l'utilisateur connecté : à l'intérieur d'AuthProvider */}
        <FavoritesProvider>
          <Router />
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
