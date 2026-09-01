import Link from "next/link";
import { signOut } from "../actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F4]">
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[960px] mx-auto px-[24px] h-[64px] flex items-center justify-between">
          <Link href="/admin" className="font-semibold text-[#1C2A38]">
            Blog admin
          </Link>
          <form action={signOut}>
            <button type="submit" className="text-[14px] text-[#43586C]">
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-[960px] mx-auto px-[24px] py-[40px]">{children}</main>
    </div>
  );
}
