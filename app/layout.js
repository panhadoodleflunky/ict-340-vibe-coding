import collection from "../collection.config.js";

export const metadata = {
  title: `${collection.name} — Khmer Living Archive`,
  description: collection.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background:
            "radial-gradient(circle at 15% 0%, #2A2113 0%, #14181F 45%), radial-gradient(circle at 85% 100%, #241A0E 0%, #14181F 55%), #14181F",
          backgroundAttachment: "fixed",
          color: "#E8EDF2",
          fontFamily:
            "'Georgia', 'Iowan Old Style', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
