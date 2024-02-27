import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-12 bg-white flex pt-4 pb-8 px-4 justify-between">
      <div className="flex gap-2 ">
        <Image src="/icon-next.svg" width={22} height={20} alt="cart-icon" className="text-black-75" />
        <p>sneakers</p>
      </div>
      <div className="flex gap-2">
        <p>cart</p>
        <p>profile</p>
      </div>
    </div>
  );
}
