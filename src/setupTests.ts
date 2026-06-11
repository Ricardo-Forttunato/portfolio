import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mocking CSS Modules

// Mocking original i18n to avoid issues when link embedded in react-router-dom components
vi.mock("react-i18next", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-i18next")>();
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        resolvedLanguage: "pt",
      },
    }),
  };
});

// Mocking React Router DOM to avoid issues with components that use Link or NavLink
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();

  return {
    ...actual,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => {
      return actual.BrowserRouter({
        future: {
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        },
        children,
      });
    },
  };
});
