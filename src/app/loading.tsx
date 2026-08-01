export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-zinc-800 border-t-accent rounded-full animate-spin"></div>
        <p className="text-muted font-mono tracking-widest text-sm uppercase">Loading...</p>
      </div>
    </div>
  );
}
