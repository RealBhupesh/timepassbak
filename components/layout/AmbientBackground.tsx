export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden dark:opacity-40">
      <div className="absolute left-[max(12%,calc(50%-20rem))] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-honey/25 blur-3xl" />
      <div className="absolute right-[-8rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-rose/35 blur-3xl" />
      <div className="absolute bottom-[-16rem] left-[18%] h-[36rem] w-[36rem] rounded-full bg-macaron/40 blur-[120px]" />
      <div className="absolute bottom-[-6rem] right-[22%] h-56 w-56 rounded-full border border-white/40 bg-white/30 blur-2xl" />
    </div>
  );
}
