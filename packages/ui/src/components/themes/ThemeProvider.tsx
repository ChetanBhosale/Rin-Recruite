import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextThemeProvider enableSystem={false} attribute="class" defaultTheme="dark" forcedTheme="dark">{children}</NextThemeProvider>;
};

export default ThemeProvider;