import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function chatHrefConstructor (id1:string,id2:string){
  const sortedIds = [id1,id2].sort()
  return `${sortedIds[0]}--${sortedIds[1]}`
}

export function toPusherKey(Key:string){
  return Key.replace(/:/g,"__")
}