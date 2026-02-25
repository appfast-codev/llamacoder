import Image from "next/image";
import { memo } from "react";

import GithubIcon from "@/components/icons/github-icon";
import Link from "next/link";

function Header() {
  return (
    <header className="relative mx-auto flex w-full shrink-0 items-center justify-center py-6">
      <Link href="/" className="flex flex-row items-center gap-3">
        <span className="text-lg font-bold text-gray-900">Manah AI</span>
      </Link>
    </header>
  );
}

export default memo(Header);
