// Auth temporarily disabled for preview
// Re-enable when Google OAuth is set up

export default async function LayoutPrivate({ children }) {
  // Skip auth check for now
  return <>{children}</>;
}
