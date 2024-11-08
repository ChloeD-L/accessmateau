import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect, useState } from "react";
import React from "react";

export const DropdownButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  // 鼠标悬停时显示菜单
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setOpen(true);
  };

  // 鼠标移出时隐藏菜单，添加延迟避免菜单闪烁
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setOpen(false), 1000);
  };

  // // 点击按钮时切换菜单状态，并保持悬停状态
  // const handleClick = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // // 点击页面其他地方时关闭菜单
  // const handleOutsideClick = (event: MouseEvent) => {
  //   if (!event.target || !(event.target as HTMLElement).closest(".dropdown-menu")) {
  //     setOpen(false);
  //   }
  // };

  // // 添加和移除全局点击事件监听器
  // useEffect(() => {
  //   if (open) {
  //     document.addEventListener("click", handleOutsideClick);
  //   } else {
  //     document.removeEventListener("click", handleOutsideClick);
  //   }
  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [open]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="border-0 bg-white shadow-none hover:bg-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <text className="tracking-wider inline-block text-textColor text-base font-normal hover:text-customTertiary">
            SERVICES
          </text>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 bg-white shadow-md rounded-lg p-2">
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <Link href="/service">
            <text className="cursor-pointer text-base">Our service</text>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <Link href="/hosting">
            <text className="cursor-pointer text-base">SIL and Respite</text>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
