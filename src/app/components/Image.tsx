import Image from "next/image";

export default function ImageComp() {
  return (
    <Image
      src="/keyboard.jpg" // Directly reference the image in the public folder
      alt="Logo"
      width={500}
      height={300}
    />
  );
}
