import { ThemeProvider } from './context/ThemeProvider';
import { ThemeDemo } from './components/ThemeDemo';

function App() {
  return (
    <ThemeProvider defaultTheme="light" defaultMode="system">
      <ThemeDemo />
    </ThemeProvider>
  );
}

export default App;